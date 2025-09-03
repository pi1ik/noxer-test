
import React from "react";
import Button from "../Button/Button"
import Slider from "../Slider/Slider"
import ProductCardLabel from "../ProductCardLabel/ProductCardLabel";

import './ProductCard.scss'
import LikeButton from "../LikeButton/LikeButton";

type Label = "sale" | "premium" | "new" | "hit" | "discount" | "hot"

type ProductCardProps = {
    item: {
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
    }; 
    key: React.Key
}

function ProductCard ({item}: ProductCardProps) {


    const imgs = item.images.map(image => {return image.Image_URL})

    const ProductCardSlider = React.memo( () => {
        return (
            <div className="product-card__slider" id="product-slider">
                <Slider arr={imgs}/>
            </div>
        )
    })

    const labels: Label[] = item.marks.map(item => {
        return item.Mark_Name
    })

    type ProductCardLabelsProps = {
        arr: Label[]
    }

    function ProductCardLabels  ({arr}: ProductCardLabelsProps) {
        return arr.map((item, i) => {
            return <ProductCardLabel key={i} label={item}/>
        })
    }

    return (
        <a className="product-card" href='#' onClick={(e) => {e.preventDefault()}}>
            <div className="product-card__labels">
                <ProductCardLabels arr={labels}/>
            </div>
            <div className="product-card__favorite">
                <LikeButton/>
            </div>
            <div className="product-card__wrapper">
                <div className="slider-wrapper">
                    <ProductCardSlider/>
                </div>
                
                <div className="product-card__price">
                <div className="product-card__price__current">{item.parameters[0].price}&nbsp;₽</div>
                    {item.parameters[0].old_price ? 
                        <>
                            <div className="product-card__price__old">{item.parameters[0].old_price}&nbsp;₽</div>
                            <div className="product-card__price__discount">-{
                            Math.round(((item.parameters[0].old_price-item.parameters[0].price)/item.parameters[0].old_price)*100)
                            }%</div>
                        </>
                    : ''
                    }
                </div>
                <div className="product-card__title">{item.Product_Name}</div>
            </div>
            
            <Button color='light' size='large' textColor='dark' innerText='Выбрать' disabled={true}/>
        </a>
    )
}

export default ProductCard