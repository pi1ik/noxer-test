
import React from 'react'
import Slider from '../Slider/Slider'
import './Banner.scss'
import { DataContext } from '../../contexts/DataContext/DataContext'

function Banner () {
    const fetchedActions = React.useContext(DataContext).fetchedActions
    const imgSrcs = fetchedActions.map((item) => {
        return item.image_url
    })
    return (
        <div className="banner-wrapper">
            <Slider arr={imgSrcs}/>
        </div>
    )

}

export default Banner
