import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';
import CategoryCard from '../CategoryCard/CategoryCard'

function CategoryCardCarousel () {
    const [data, setData] = React.useState<IProductsMainPageAPI | null>(null);
    const [isLoaded, setIsLoaded] = React.useState(false);

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
        categories: Category[]
        status: string;
    }

    type Category = {
            Category_ID: number;
            Category_Image: string;
            Category_Name: string;
            sort_order: number;
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
            .catch((err) => {
            setIsLoaded(true);
            console.warn(err)
            });
    }, []);

  return (
    <div className='category-carousel__wrapper'>

        <Swiper
            slidesPerView={5}
            spaceBetween={5}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
        >
            {
                isLoaded && data ? 
                data.categories.map(item => {

                    return (
                        <SwiperSlide key={item.Category_ID}>
                            <CategoryCard item={item} key={item.Category_ID}/>
                        </SwiperSlide>
                    )
                })
                : ''
            }
        </Swiper>

    </div>
  );
}

export default CategoryCardCarousel