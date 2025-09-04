import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import CategoryCard from '../CategoryCard/CategoryCard'

import { DataContext } from "./../../contexts/DataContext/DataContext";
import { FiltersContext } from '../../contexts/FiltersContext/FiltersContext';

import './CategoryCardCarousel.scss'

function CategoryCardCarousel () {

    const fetchedCategories = React.useContext(DataContext).fetchedCategories

    const activeFilterState = React.useContext(FiltersContext)

  return (
    <div className='category-carousel__wrapper'>

        <Swiper
            slidesPerView={5}
            spaceBetween={5}
            freeMode={true}
            modules={[FreeMode]}
            
        >
            {
                fetchedCategories.map(item => {

                    return (
                        <SwiperSlide key={item.Category_ID} className={`${item.sort_order === activeFilterState.activeFilter ? 'card_active' : ''}`}>
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