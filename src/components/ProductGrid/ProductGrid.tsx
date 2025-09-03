
import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";

import './ProductGrid.scss'
// import Button from "../Button/Button";

function ProductGrid () {

      const [isLoaded, setIsLoaded] = React.useState(false);
      const [data, setData] = React.useState<ProductsMainPageAPI | null>(null);
      const [newData, setNewData] = React.useState<ProductsMainPageAPI | null>(null);

      type Label = "sale" | "premium" | "new" | "hit" | "discount" | "hot"

      interface ProductsMainPageAPI {
        // pagination: {};
        products: {
            Product_Name: string;
            parameters: {
                chosen: boolean;
                old_price: number | null;
                price: number;
            }[];
            marks: {
                Mark_ID: number, 
                Mark_Name: Label
            }[]
            images: {
                Image_URL: string
            }[]
        }[];
        status: string;
      }


    React.useEffect(() => {
        fetch("https://noxer-test.ru/webapp/api/products?on_main=true")
          .then((response) => response.json())
          .then(
            (data) => {
              setIsLoaded(true);
              setData(data);
            }
          )
          .catch(
            (err) => {
              setIsLoaded(true);
              console.warn(err)
            });
      }, []);

      const fetchAdditionalData = async () => {
        await fetch("https://noxer-test.ru/webapp/api/products?on_main=false&per_page=100&page=2")
        .then((response) => response.json())
        .then(
          (newData) => {
            setIsLoaded(true);
            setNewData(newData);
          }
        )
        .catch(
          (err) => {
            setIsLoaded(true);
            console.warn(err)
          });
      }

    return (
      <>
          <div className="product-grid">
            {isLoaded && data ? data.products.map((item, i) => {
                return <ProductCard key={i} item={item}/>
            }) : ''}
            
            {isLoaded && newData ? newData.products.map((item, i) => {
                return <ProductCard key={i} item={item}/>
            }) : ''}

            
          </div>
          <div className="product-grid__btn">
              <Button 
                color='dark' 
                size='large' 
                innerText='Загрузить ещё' 
                textColor='dark'
                hidden={Boolean(newData)}
                onClickFn={() => {
                  console.log('Загрузка')
                  fetchAdditionalData()
                }} 
              />
            </div>
      </>
        

            

        
    )
}

export default ProductGrid