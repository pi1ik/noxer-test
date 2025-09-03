

import './Footer.scss'

function Footer () {
    return (
        <div className='footer'>
            <p className='footer__descr'>Разработано на платформе Noxer</p>
            <button className="footer__btn">
                <img 
                    src="/tg.svg" 
                    alt="tg-icon"
                    
                />
                noxerai_bot
            </button>

        </div>
    )

}

export default Footer