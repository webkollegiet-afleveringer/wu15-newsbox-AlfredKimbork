import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Popular from './views/Popular'
import Settings from './views/Settings'

import CategoriesProvider from './contexts/categoriesContext'

import './style/App.scss'
import Archive from './views/archive'
import ModeProvider from './contexts/modeContext'

const App = () => {
  
  return (
    <CategoriesProvider>
    <ModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/popular' element={ <Popular /> }/>
          <Route path='/archive' element={ <Archive /> }/>
          <Route path='/settings' element={ <Settings /> }/>
        </Routes>
      </BrowserRouter>
    </ModeProvider>
    </CategoriesProvider>
  )
}

export default App
