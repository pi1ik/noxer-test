
import Slider from '../Slider/Slider'
import './Banner.scss'

function Banner () {
    const imgSrcs = ['https://snipp.ru/uploads/images/donut.png', 'https://snipp.ru/uploads/images/donut.png', 'https://snipp.ru/uploads/images/donut.png', 'https://snipp.ru/uploads/images/donut.png']
    return (
        <div className="banner-wrapper">
            <Slider arr={imgSrcs}/>
        </div>
    )

}

export default Banner
