import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './CategoryCardCarousel.scss'

import { FreeMode } from 'swiper/modules';
import CategoryCard from '../CategoryCard/CategoryCard'
import { DataContext } from "./../../contexts/DataContext/DataContext";

function CategoryCardCarousel () {

    const fetchedCategories = React.useContext(DataContext).fetchedCategories

    React.useEffect(() => {
        console.log(fetchedCategories)
        // fetch("https://noxer-test.ru/webapp/api/products?on_main=true")
        //     .then((response) => response.json())
        //     .then(
        //     (data) => {
        //         setIsLoaded(true);
        //         setData(data);
        //     }
        //     )
        //     .catch((err) => {
        //     setIsLoaded(true);
        //     console.warn(err)
        //     });
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
                fetchedCategories.map(item => {

                    return (
                        <SwiperSlide key={item.Category_ID}>
                            <CategoryCard item={item} key={item.Category_ID}/>
                        </SwiperSlide>
                    )
                })

            }
        </Swiper>

    </div>
  );
}

export default CategoryCardCarousel