import React from 'react'
import Button from './components/Button/Button'
import SearchInput from './components/Search/Search'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import CategoryCardCarousel from './components/CategoryCardCarousel/CategoryCardCarousel'
import NavBarBottom from './components/NavBarBottom/NavBarBottom'
import './App.scss'



function App() {

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <div className='container'>
        <div className={`wrapper wrapper__navigation-top ${isOpen ? 'wrapper wrapper__navigation-top_fixed' : ''}`}>
          <div className="navbar-top">
            <Button 
              color='dark' 
              size='small' 
              innerText='Закрыть' 
              textColor='light'
              textML={5} 
              onClickFn={() => {
                console.log('Закрыть')
                setIsOpen(false)
              }} 
              iconSrc='/src/assets/close.svg'
            />
            <a href="#" className="navbar-top__link">
              <img src="/src/assets/icon_tg.svg" alt="tg-icon" className="navbar-top__link__icon" />
              наш tg-канал
            </a>
            <Button 
              color='dark' 
              size='small' 
              innerText='•••' 
              textColor='light'
              textML={5} 
              onClickFn={() => {
                console.log('Закрыть')
                setIsOpen(false)
              }} 
              iconSrc='/src/assets/expand.svg'
            />
          </div>
          
        </div>
        <div className="wrapper wrapper__search-input">
          <SearchInput isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>

        <div className="wrapper wrapper__banner">
          <Banner/>
        </div>

        <div className="wrapper wrapper__category">
          <CategoryCardCarousel/>
        </div>
        
        <div className="wrapper wrapper__product-grid">
          <ProductGrid/>
        </div>

        <div className="wrapper wrapper__footer">
          <Footer/>
        </div>

        <div className="wrapper wrapper__navigation-bottom">
          <NavBarBottom/>
        </div>
        
        
      </div>

    
    </>
  )
}

export default App
