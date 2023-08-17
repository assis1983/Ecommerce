import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './assets/global'
// import { Home } from './pages/products'
import { Router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <GlobalStyle />
    <Router />
  </React.StrictMode>,
)
