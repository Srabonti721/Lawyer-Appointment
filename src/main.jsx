import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import TitleProvider from './context/TitleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TitleProvider>
    <RouterProvider router={router} />,
    </TitleProvider>
  </StrictMode>,
)
