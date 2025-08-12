import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import SingUp from './components/SingUp/SingUp.jsx';
import SingUp2 from './components/SingUp2/SingUp2.jsx';
import AuthProvider from './components/Providers/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import Login2 from './components/Login2/Login2.jsx';
import SingIn from './components/SingIn/SingIn.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Cart from './components/Cart/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/singup',
        element:<SingUp></SingUp>
      },
      {
        path:'/singup2',
        element:<SingUp2></SingUp2>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/login2',
        element:<Login2></Login2>
      },
      {
        path:'/singin',
        element:<SingIn></SingIn>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path: '/cart',
        element:<PrivateRoute> <Cart></Cart> </PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
