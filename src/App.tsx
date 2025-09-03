import React from 'react'
import Button from './components/Button/Button'
import SearchInput from './components/Search/Search'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import CategoryCardCarousel from './components/CategoryCardCarousel/CategoryCardCarousel'
import NavBarBottom from './components/NavBarBottom/NavBarBottom'
import fetchData from './utils/fetchData'
import { DataContextProvider } from './contexts/DataContext/DataContextProvider'

import type { Product, Category, Action } from './contexts/DataContext/DataContext'

import './App.scss'



function App() {

  const [isOpen, setIsOpen] = React.useState(false)

  const [fetchedProducts, setFetchedProducts] = React.useState<Product[]>([])
  const [fetchedCategories, setFetchedCategories] = React.useState<Category[]>([])
  const [fetchedMarks, setFetchedMarks] = React.useState<object[]>([])
  const [fetchedActions, setFetchedActions] = React.useState<Action[]>([])
  const [fetchedFastSearch, setFetchedFastSearch] = React.useState<string[]>([])

  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setIsLoading(true)
    fetchData()
      .then((res) => {
        console.log(res)
        setFetchedProducts(res.products)
        setFetchedCategories(res.categories)
        setFetchedMarks(res.product_marks)
        setFetchedActions(res.special_project_parameters_actions)
        setFetchedFastSearch(res.special_project_parameters_json)
        setIsLoading(false)
      })
      .catch((e) => console.warn(e))
    ;
  }, [])

  React.useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  return (
    <>
      { !isLoading ?  
        <DataContextProvider props={{fetchedProducts, fetchedCategories, fetchedMarks, fetchedActions, fetchedFastSearch}} >
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
                  iconSrc='/close.svg'
                />
                <a href="#" className="navbar-top__link">
                  <img src="/icon_tg.svg" alt="tg-icon" className="navbar-top__link__icon" />
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
                  iconSrc='/expand.svg'
                />
              </div>
              
            </div>
            <div className="wrapper wrapper__search-input">
              <SearchInput isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>

            {!isOpen ? 
              <>
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
              </>
              
            : ''}

          </div>
        </DataContextProvider> 
      : ''}
    </>
  )
}

export default App
