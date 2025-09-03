
import React from 'react';
import './PopularSearchItem.scss'

type PopularSearchItemProps = {
    item: string; 
    key: React.Key;
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

function PopularSearchItem ({item, setInputValue}: PopularSearchItemProps) {
        return (
            <li  className='search__popular__list-item'>
                <button className='search__popular__list-item__link' onClick={() => {
                    console.log(item.toLowerCase())
                    setInputValue(item.toLowerCase())
                }}>
                    <img src='/search.svg'/>
                    <div>{item.toLowerCase()}</div>
                </button>
            </li>
        )
    
}

export default PopularSearchItem