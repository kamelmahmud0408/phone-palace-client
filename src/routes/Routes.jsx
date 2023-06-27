import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Phones from '../pages/Phones/Phones';
import PrivetRoute from './PrivetRoute';
import Dashboard from '../layout/Dashboard';
import MyCart from '../pages/Dashboard/MyCart/MyCart';

const router = createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/phones',
            element:<Phones></Phones>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
    ]
   },
   {
    path:'dashboard',
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children:[
       {
        path:'mycart',
        element: <MyCart></MyCart>
       }
        
    ]
}
])


export default router;