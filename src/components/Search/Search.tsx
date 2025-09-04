import React, { useEffect } from "react";
import Button from "../Button/Button";
import PopularSearchItem from "../PopularSearchItem/PopularSearchItem";
import ProductSearchPreview from "../ProductSearchPreview/ProductSearchPreview";

import type { Product } from "../../contexts/DataContext/DataContext";
import { DataContext } from "../../contexts/DataContext/DataContext";

import "./Search.scss";

type SearchInputProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function SearchInput({isOpen, setIsOpen}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState<Product[] | null>(null);
  const [isInputFocused, setIsInputFocused] = React.useState(false);

  const fastSearch = React.useContext(DataContext).fetchedFastSearch
  const allProducts = React.useContext(DataContext).fetchedProducts

  const inputRef = React.useRef(null);

  useEffect(() => {
    if (allProducts !== null) {
      const filteredProducts: Product[] | null = filterProducts(searchTerm, allProducts);
      setFilteredItems(filteredProducts)
    }
    
  }, [searchTerm]);

  const filterProducts = (
    searchText: string,
    searchData: Product[]
  ) => {
    const filtered = (() => {
      if (!searchText) {
        return null;
      } else {
        return searchData.filter((item) => {
          return item.Product_Name.toLowerCase().includes(searchText);
        });
      }
    })();
    return filtered;
  };

  const renderPopularSearchList = (arr: string[]) => {
    return (
      <ul className="search__popular__list">
        {arr.map((item, i) => {
          return <PopularSearchItem item={item} key={i} setInputValue={setSearchTerm}/>;
        })}
      </ul>
    );
  };

  const renderProductSearchPreviewList = (arr: Product[] | null) => {
    return (
      <ul className="search__product-preview__list">
        {arr && arr.length > 0 ? arr.map((item, i) => {
          return <ProductSearchPreview item={item} key={i} />;
        }): ''}
      </ul>
    );
  };

  return (
    <>
      <div className={`search ${isOpen ? 'search_fixed' : ''}`}>
        <div className="search__input">
          <img src="/search.svg" alt="search"/>
          <input
            type="text"
            name="search"
            placeholder="Найти товары"
            value={searchTerm}
            ref={inputRef}
            onFocus={() => {
              setIsInputFocused(true)               
              setIsOpen(true)
            }} 
            onBlur={() => {
              setIsInputFocused(false)
            }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <Button
            hidden={!isInputFocused && !searchTerm}
            color="black"
            size="small"
            onClickFn={() => console.log("Перейти")}
            textColor="white"
            innerText="Перейти"
          />
        </div>
        <div className="search__popular" hidden={Boolean(searchTerm) || !isOpen}>
          <h3 className="search__popular__title">Часто ищут</h3>
          {fastSearch ? renderPopularSearchList(fastSearch) : 'Здесь пока ничего нет :('}
        </div>
        
        <div className="search__product-preview" hidden={filteredItems && filteredItems.length > 0 && isOpen  ? false : true}>
          <div className="search__product-preview__bg">
            {renderProductSearchPreviewList(filteredItems)}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default SearchInput;
