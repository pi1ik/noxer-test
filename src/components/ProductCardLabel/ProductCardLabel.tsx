
import './ProductCardLabel.scss'

type Label = "sale" | "premium" | "new" | "hit" | "discount" | "hot"

type ProductCardLabelProps = {
    label: Label;
    key: React.Key 
}

function ProductCardLabel ({label}: ProductCardLabelProps) {
    if (label === "sale") {
        return (
            <div className='product-card__label product-card__label_sale'>Sale</div>
        )
    } else if (label === "premium") {
        return (
            <div className='product-card__label product-card__label_premium'>Premium</div>
        )
    } else if (label === "new") {
        return (
            <div className='product-card__label product-card__label_new'>New</div>
        )
    } else if (label === "hit") {
        return (
            <div className='product-card__label product-card__label_hit'>Хит</div>
        )
    } else if (label === "discount") {
        return (
            <div className='product-card__label product-card__label_discount'>discount</div>
        )
    } else if (label === "hot") {
        return (
            <div className='product-card__label product-card__label_hot'>hot</div>
        )
    }

}

export default ProductCardLabel