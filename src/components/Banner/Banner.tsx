import React from 'react'

import Slider from '../Slider/Slider'

import { DataContext } from '../../contexts/DataContext/DataContext'

import './Banner.scss'

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
