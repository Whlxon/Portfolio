import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import './index.css'

import App from './App.tsx'
import { Home } from './Pages/home/home.tsx';
import { Project } from './Pages/project/project.tsx';

const router = createBrowserRouter([
  {
    path:'',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/project',
        element: <Project/>
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
