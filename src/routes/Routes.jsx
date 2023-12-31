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
import AllUser from '../pages/Dashboard/AllUser/AllUser';
import AdminRoute from './AdminRoute';
import AddPhone from '../pages/Dashboard/AddPhone/AddPhone';
import Payment from '../pages/Dashboard/Payment/Payment';
import ManagePhone from '../pages/Dashboard/ManagePhone/ManagePhone';
import UpdatePhone from '../pages/Dashboard/UpdatePhone/UpdatePhone';
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory';

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
        element: <PrivetRoute><MyCart></MyCart></PrivetRoute>
       }
       ,
       {
        path:'allusers',
        element:<AdminRoute><AllUser></AllUser></AdminRoute>
       },
       {
        path:'addphone',
        element:<AdminRoute><AddPhone></AddPhone></AdminRoute>
       },
       {
        path:'managephone',
        element:<AdminRoute><ManagePhone></ManagePhone></AdminRoute>
       },
       {
        path:'/dashboard/updatephone/:id',
        element:<UpdatePhone></UpdatePhone>,
        loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
       },
       {
        path:'payment',
        element:<Payment></Payment>
       },
       {
        path:'history',
        element:<PaymentHistory></PaymentHistory>
       }
       
        
    ]
}
])


export default router;