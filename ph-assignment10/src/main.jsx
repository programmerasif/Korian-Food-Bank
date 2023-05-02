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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: '/safelist/:detilsId',
        element:<ViewDetils />,
        loader: ({params}) => fetch(`http://localhost:5000/chefslist/${params.detilsId}`)
        
      }
    ],
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
