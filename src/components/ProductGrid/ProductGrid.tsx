
import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";

import type { Product } from "../../contexts/DataContext/DataContext";
import { FiltersContext } from '../../contexts/FiltersContext/FiltersContext';
import { DataContext } from "../../contexts/DataContext/DataContext";

import './ProductGrid.scss'

function ProductGrid () {

      const [visibleProducts, setVisibleProducts] = React.useState<Product[]>([]);
      const [activeCategory, setActiveCategory] = React.useState<number>(NaN)
      const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([])

      const activeFilterState = React.useContext(FiltersContext)
      const allProducts = React.useContext(DataContext).fetchedProducts

      React.useEffect (() => {
        const visibleLength = visibleProducts.length
        const sliced = allProducts.slice(0, visibleLength + 12)
        setVisibleProducts(sliced)
      }, [])

      React.useEffect(() => {
        if (!Number.isNaN(activeFilterState.activeFilter)) {
          const filtered = allProducts.filter((item) => {
            const categoriesList = item.categories.map((item) => {
              return item.sort_order
            })
            return categoriesList.includes(activeFilterState.activeFilter)
          })
          const sliced = filtered.slice(0, 12)
          setFilteredProducts(filtered)
          setVisibleProducts(sliced)
          setActiveCategory(activeFilterState.activeFilter)
        }
      }, [activeFilterState.activeFilter])

      const showMore = () => {
        if (!Number.isNaN(activeCategory) && filteredProducts.length > visibleProducts.length) {
          const visibleLength = visibleProducts.length
          const sliced = filteredProducts.slice(0, visibleLength + 12)
          setVisibleProducts(sliced)
        } else if (allProducts.length > visibleProducts.length) {
          const visibleLength = visibleProducts.length
          const sliced = allProducts.slice(0, visibleLength + 12)
          setVisibleProducts(sliced)
        } else {
          return
        }
      }

    return (
      <>
          { filteredProducts.length === 0 && !Number.isNaN(activeFilterState.activeFilter) ?
            <div className="product-grid__warn"> В этой категории товаров нет :( </div>
            : ''}
          <div className="product-grid">
            { visibleProducts ? visibleProducts.map((item, i) => {
                return <ProductCard key={i} item={item}/>
            }) : ''}
          </div>
          <div className="product-grid__btn">
              <Button 
                color='dark' 
                size='large' 
                innerText='Загрузить ещё' 
                textColor='dark'
                hidden={!Number.isNaN(activeCategory) ? Boolean(visibleProducts.length >= filteredProducts.length) : Boolean(visibleProducts.length >= allProducts.length)}
                onClickFn={() => {
                  console.log('Загрузка')
                  showMore()
                }} 
              />
          </div>
      </>

    )
}

export default ProductGrid