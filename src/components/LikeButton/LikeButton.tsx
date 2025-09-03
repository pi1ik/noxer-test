import React from "react"
import './LikeButton.scss'
function LikeButton () {
    const [isFavorite, setIsFavorite] = React.useState(false)
    return (
        <button onClick={() => setIsFavorite(!isFavorite)} className="like-btn">
            {isFavorite ? 
                <img src="/heart-active.svg" alt="like" />
            : 
            <img src="/heart-empty.svg" alt="like" />}
        </button>
    )
}

export default LikeButton