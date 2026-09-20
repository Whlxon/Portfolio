import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import './index.css'

import App from './App.tsx'
import { Accueil } from './Pages/accueil.tsx';

const router = createBrowserRouter([
  {
    path:'',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Accueil/>
      },
      {
        path: '/selection',
        element: null
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading translations...</div>}>
      <RouterProvider router ={router}/>
    </Suspense>
  </StrictMode>,
)
