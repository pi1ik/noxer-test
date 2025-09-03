
import './ProductSearchPreview.scss'

type ProductSearchPreviewProps = {
    item: {
        Product_Name: string;
        parameters: {
            chosen: boolean;
            old_price: number | null;
            price: number;
        }[];
        images: {
            Image_URL: string
        }[]
    }; 
    key: React.Key
}

function ProductSearchPreview ({item}: ProductSearchPreviewProps) {

    return (
        <div className="preview">
            <div className="preview__img">
                <img src={item.images[0].Image_URL}/>
            </div>
            <div className="preview__descr">
                <div className="preview__descr__title">{item.Product_Name
                }</div>
                <div className="preview__descr__price">
                    <div className="preview__descr__price__current">{item.parameters[0].price}&nbsp;₽</div>
                    {item.parameters[0].old_price ? 
                        <>
                            <div className="preview__descr__price__old">{item.parameters[0].old_price}&nbsp;₽</div>
                            <div className="preview__descr__price__discount">-{
                            Math.round(((item.parameters[0].old_price-item.parameters[0].price)/item.parameters[0].old_price)*100)
                            }%</div>
                        </>
                    : ''
                    }
                    
                </div>
            </div>
            

        </div>
    )

}

export default ProductSearchPreview