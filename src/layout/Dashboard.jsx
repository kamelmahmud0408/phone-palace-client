import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()

    const isAdmin = true;
    // const [isAdmin]=useAdmin()

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2 " className="drawer-overlay "></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'><ion-icon name="home"></ion-icon>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/additem'> Add an Items</NavLink></li>
                            <li><NavLink to='/dashboard/manageitems'>Manage Items</NavLink></li>
                            <li><NavLink to='/dashboard/history'> Manage Booking</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'> All Users</NavLink></li>
                           
                        </> : <>
                            <li><NavLink to='/dashboard/userhome'>User Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'>Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/history'>Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'>My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink></li>
                        </>
                    }

                    <div className="divider">OR</div>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='order/dessert'>Our Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
 }

export default Dashboard;