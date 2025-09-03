
import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import type { Product } from "../../contexts/DataContext/DataContext";

import './ProductGrid.scss'
import { DataContext } from "../../contexts/DataContext/DataContext";
// import Button from "../Button/Button";

function ProductGrid () {

      const [visibleProducts, setVisibleProducts] = React.useState<Product[]>([]);

      const allProducts = React.useContext(DataContext).fetchedProducts


      React.useEffect (() => {
        console.log(allProducts.length < visibleProducts.length)

        const visibleLength = visibleProducts.length
        const sliced = allProducts.slice(visibleLength, visibleLength + 12)
        setVisibleProducts(sliced)
      }, [])

      const showMore = () => {
        if (allProducts.length > visibleProducts.length) {

          const visibleLength = visibleProducts.length
          console.log(visibleLength)
          const sliced = allProducts.slice(0, visibleLength + 12)
          console.log(sliced)
          setVisibleProducts(sliced)
        } else {
          console.log('no here')
        }
      }

    return (
      <>
          <div className="product-grid">
            {visibleProducts ? visibleProducts.map((item, i) => {
                return <ProductCard key={i} item={item}/>
            }) : ''}
          </div>
          <div className="product-grid__btn">
              <Button 
                color='dark' 
                size='large' 
                innerText='Загрузить ещё' 
                textColor='dark'
                hidden={Boolean(visibleProducts.length === allProducts.length)}
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