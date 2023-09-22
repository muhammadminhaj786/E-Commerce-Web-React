import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

const AppRouting = () => {
  return (
    <div>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
  )
}

export default AppRouting