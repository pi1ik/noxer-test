import React from 'react';

import type { Category } from '../../contexts/DataContext/DataContext';
import { FiltersContext } from '../../contexts/FiltersContext/FiltersContext';

import './CategoryCard.scss'

type CategoryCardProps = {
    item: Category;
    key: React.Key 
}

function CategoryCard ({item}: CategoryCardProps) {
    const activeFilterState = React.useContext(FiltersContext)
    return (
        <button className={`category-card ${item.sort_order === activeFilterState.activeFilter ? 'category-card_active' : ''}`} onClick={() => activeFilterState.changeActiveFilter(item.sort_order)}>
            <img src={item.Category_Image === "" ? "/placeholder.jpg" : item.Category_Image} alt={item.Category_Name} onError={(e) => e.currentTarget.src = "/placeholder.jpg"} className="category-card__img" />
            <div className="category-card__title">{item.Category_Name}</div>
        </button>
    )
}

export default CategoryCard