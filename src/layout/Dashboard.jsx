import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart()

    // const isAdmin = true;
     const [isAdmin]=useAdmin()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminhome'>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/addphone'> Add an phone</NavLink></li>
                            <li><NavLink to='/dashboard/managephone'>Manage phone</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'> All Users</NavLink></li>

                        </> : <>
                            <li><NavLink to='/dashboard/userhome'>User Home</NavLink></li>
                            <li><NavLink to='/dashboard/history'>Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'>My Cart <span className="badge badge-secondary">
                                +{cart?.length || 0}</span></NavLink></li>
                        </>
                    }

                    <div className="divider">OR</div>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/phones'>All Phones</NavLink></li>

                </ul>
            </div>
        </div>
    );
}

export default Dashboard;