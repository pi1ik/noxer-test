import React, { useEffect } from "react";
import Button from "../Button/Button";
import PopularSearchItem from "../PopularSearchItem/PopularSearchItem";
import ProductSearchPreview from "../ProductSearchPreview/ProductSearchPreview";
import "./Search.scss";

type SearchInputProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function SearchInput({isOpen, setIsOpen}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState<Product[] | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isInputFocused, setIsInputFocused] = React.useState(false);
  const [data, setData] = React.useState<IProductsMainPageAPI | null>(null);

  const inputRef = React.useRef(null);

  type Product = {
    Product_Name: string;
    parameters: {
        chosen: boolean;
        old_price: number | null;
        price: number;
    }[];
    images: {
        Image_URL: string
    }[]
  }

  interface IProductsMainPageAPI {
    products: Product[];
    special_project_parameters_json: {
      fast_search_strings: {
        parameters_list: string[]
      }
    }
    status: string;
  }


  useEffect(() => {
    fetch("https://noxer-test.ru/webapp/api/products?on_main=true")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setData(data);
        }
      )
      .catch((err) => {
        setIsLoaded(true);
        console.warn(err)
      });
  }, []);

  useEffect(() => {
    if (isLoaded && data !== null) {
      const filteredProducts: Product[] | null = filterProducts(searchTerm, data);
      setFilteredItems(filteredProducts)
    }
    
  }, [searchTerm]);

  

  const filterProducts = (
    searchText: string,
    searchData: IProductsMainPageAPI
  ) => {
    const filtered = (() => {
      if (!searchText) {
        return null;
      } else {
        return searchData.products.filter((item) => {
          return item.Product_Name.toLowerCase().includes(searchText);
        });
      }
    })();
    return filtered;
  };

  // useEffect(() => {
  //   const Debounce = setTimeout(() => {

  //   }, 300);

  //   return clearTimeout(Debounce);
  // }, [isLoaded, searchTerm]);

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
          <img src="/src/assets/search.svg" />
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
            hidden={!isInputFocused}
            color="black"
            size="small"
            onClickFn={() => console.log("Перейти")}
            textColor="white"
            innerText="Перейти"
          />
        </div>
        <div className="search__popular" hidden={Boolean(searchTerm) || !isOpen}>
          <h3 className="search__popular__title">Часто ищут</h3>
          {data ? renderPopularSearchList(data.special_project_parameters_json.fast_search_strings.parameters_list) : 'Здесь пока ничего нет :('}
        </div>
        
        <div className="search__product-preview" hidden={filteredItems && filteredItems.length>0 && isOpen  ? false : true}>
          <div className="search__product-preview__bg">
            {renderProductSearchPreviewList(filteredItems)}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default SearchInput;
