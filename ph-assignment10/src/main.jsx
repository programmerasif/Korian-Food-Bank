import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Header from './components/share/Header/Header.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register';
import ViewDetils from './components/ViewDetls/ViewDetils';
import AuthProvider from './providers/AuthProvider';
import PrivateRout from './PrivateRout/PrivateRout';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Header></Header>
      },
      {
        path: '/login',
        element: <Login />
      }, 
      {
        path: '/register',
        element: <Register />
      }, 
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/safelist/:detilsId',
        element: <PrivateRout> <ViewDetils /> </PrivateRout>,
        loader: ({params}) => fetch(`https://server-6jg7-programmerasif.vercel.app/chefslist/${params.detilsId}`)
        
      }
    ],
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
