import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './views/Home/Home'
import Popular from './views/popular/Popular'
import Settings from './views/settings/Settings'

import CategoriesProvider from './contexts/categoriesContext'

import './App.css'

const App = () => {

  return (
    <CategoriesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/popular' element={ <Popular /> }/>
          <Route path='/settings' element={ <Settings /> }/>
        </Routes>
      </BrowserRouter>
    </CategoriesProvider>
  )
}

export default App
