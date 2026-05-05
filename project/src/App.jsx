import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Layout from './components/layout'
import Home from './views/Home'
import Archive from './views/archive'
import Popular from './views/Popular'
import Settings from './views/Settings'

import CategoriesProvider from './contexts/categoriesContext'
import ModeProvider from './contexts/modeContext'

import './style/App.scss'
import SearchProvider from './contexts/searchContext'

const App = () => {

  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
    <CategoriesProvider>
    <ModeProvider>
      <BrowserRouter>
        <SearchProvider>
          <Routes>
            <Route element={ <Layout /> }>
              <Route path='/' element={ <Home /> }/>
              <Route path='/popular' element={ <Popular /> }/>
              <Route path='/archive' element={ <Archive /> }/>
              <Route path='/settings' element={ <Settings /> }/>
            </Route>
          </Routes>
        </SearchProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </ModeProvider>
    </CategoriesProvider>
    </QueryClientProvider>
  )
}

export default App
