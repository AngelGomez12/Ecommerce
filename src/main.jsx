import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Profile } from './routes/Profile'
import { CreateAccount } from './routes/CreateAccount'
import { LogIn } from './routes/LogIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LogIn />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/createAccount',
    element: <CreateAccount />
  },
  {
    path: '/home',
    element: <App />
  },
  {
    path: '/product/:id',
    element: 'Detalle de producto'
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
