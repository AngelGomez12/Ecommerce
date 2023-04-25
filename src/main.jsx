import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Profile } from './pages/Profile'
import { CreateAccount } from './pages/CreateAccount'
import { LogIn } from './pages/LogIn'
import { Details } from './pages/Details'

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
    element: <Details />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
