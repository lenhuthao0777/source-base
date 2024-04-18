import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes />
    </Suspense>
  </React.StrictMode>
)
