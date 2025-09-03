
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.scss'

type SliderProps = {
    arr: string[]
}

function Slider ({arr}: SliderProps) {
    
    const slides = arr.map(imgSrc => {

        return (
            <SwiperSlide>
                <img src={imgSrc} onError={(e) => e.currentTarget.src = "/src/assets/placeholder.webp"}/>
            </SwiperSlide>
        )
    })
    
    return (

        <Swiper
            pagination={{
                dynamicBullets: true,
                }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                arr.length > 0 ? 
                    slides 
                : 
                <SwiperSlide>
                    <img src="/src/assets/placeholder.webp"/>
                </SwiperSlide>
            }
            {slides}
        </Swiper>

        
    )
    
}

export default Slider