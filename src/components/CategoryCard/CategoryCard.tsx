
import './CategoryCard.scss'

type CategoryCardProps = {
    item: Category;
    key: React.Key 
}

type Category = {
    Category_ID: number;
    Category_Image: string;
    Category_Name: string;
    sort_order: number;
}

function CategoryCard ({item}: CategoryCardProps) {
    return (
        <div className="category-card">
            {/* <img src="https://snipp.ru/uploads/images/donut.png" alt="" className="category-carg__img" /> */}
            <img src={item.Category_Image === "" ? "/src/assets/placeholder.webp" : item.Category_Image} alt={item.Category_Name} onError={(e) => e.currentTarget.src = "/src/assets/placeholder.webp"} className="category-card__img" />
            <div className="category-card__title">{item.Category_Name}</div>
        </div>
    )
}

export default CategoryCard