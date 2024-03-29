import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './routers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
