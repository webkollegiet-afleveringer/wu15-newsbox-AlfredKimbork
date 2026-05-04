import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './views/Home'
import Archive from './views/archive'
import Popular from './views/Popular'
import Settings from './views/Settings'

import CategoriesProvider from './contexts/categoriesContext'
import ModeProvider from './contexts/modeContext'

import './style/App.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {

  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </ModeProvider>
    </CategoriesProvider>
    </QueryClientProvider>
  )
}

export default App
