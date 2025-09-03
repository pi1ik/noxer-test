
import './Button.scss'

type Size = 'large' | 'small'
type Color = 'light' | 'dark' | 'black' 
type TextColor = 'light' | 'dark' | 'white'

type ButtonProps = {
    size: Size;
    color: Color;
    textColor: TextColor
    hidden?: boolean;
    disabled?: boolean;
    onClickFn?: () => void;
    textML?: number;
    iconSrc?: string;
    innerText?: string;
    
}

function Button({ size, color, textColor, hidden = false, disabled = false, onClickFn,  textML, iconSrc, innerText,}: ButtonProps) {

    return (
        <button className={`button button_${color} button_${size} button_${textColor}Text ${hidden ? 'button_hidden': ''}`} onClick={onClickFn} disabled={disabled}>
            { iconSrc ?
                <img src={iconSrc}/>
                : ''
            }
            { innerText ? 
                <div style={{"marginLeft": `${textML}px`}}>{innerText}</div>
            : ''}
            
        </button>
    )
}

export default Button