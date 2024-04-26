import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import HomePage from './pages/home/index.tsx'
import GlobalStyles from './assets/globalStyles/globalStyle';
import Login from './pages/login/login.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: '',
    children: [
      { path: '/', element: <HomePage /> }, //pagina inicial
      { path: '/login', element: <Login /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />
  </React.StrictMode>,
)
