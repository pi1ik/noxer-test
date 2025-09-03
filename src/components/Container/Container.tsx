import './Container.scss'

type Class = 'p5' | 'p10'

function Container (classN: Class) {

    

    return (
        <div className={classN}>
            
        </div>
    )
}

export default Container