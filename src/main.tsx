import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './Root'


// pages
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Products from './pages/products/Products'

// -- errors
import Page404 from './pages/error/404'


//router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Page404/>,
  
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "kontakt",
        element: <Contact/>
      },
      {
        path: "galeria",
        element: <Gallery/>
      },
      {
        path: "oferta",
        element: <Products/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
