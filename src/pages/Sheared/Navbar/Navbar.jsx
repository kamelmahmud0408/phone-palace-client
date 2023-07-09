import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [isAdmin] = useAdmin()
    const [cart] = useCart()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch()
    }



    return (

        <nav
            className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60  text-gray-900" : "text-white"
                }`}
        >
            <div className="flex items-center justify-between bg-white/60">
                <div className='mx-7'>
                    <h4 className="text-4xl uppercase font-bold text-black">
                        Phone<span className="text-cyan-600">Palace</span>
                    </h4>
                </div>
                <div
                    className={` ${sticky ? "md:bg-white/0 bg-white" : "bg-white"
                        } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
                >
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        <li className="px-6 hover:text-cyan-600"><Link to='/'>Home</Link></li>
                        <li className="px-6 hover:text-cyan-600"><Link to='/phones'>Phones</Link></li>
                        
                        {
                            user ? <div>{
                                user && <span className='text-black flex flex-col lg:flex-row lg:items-center gap-4'>
                                    <li className="px-6 hover:text-cyan-600"><Link to='/dashboard/mycart'>
                                        <button className="btn gap-2">
                                            <ion-icon name="cart"></ion-icon>
                                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                                        </button>
                                    </Link></li>
                                    {
                                        isAdmin ?
                                            <li><Link to='/dashboard/allusers'>Dashboard</Link></li> : <li><Link to='/dashboard/mycart'>Dashboard</Link></li>

                                    }

                                    <li className="px-6 hover:text-cyan-600"> <div className='tooltip text-start' data-tip={user.displayName}  ><img className='w-10 h-10 rounded-full tooltip' src={user.photoURL} alt="" /></div></li> <li className="px-6 hover:text-cyan-600"><Link onClick={handleLogOut} to='/login'>LogOut</Link></li> </span>
                            }</div> : <li className="px-6 hover:text-cyan-600"><Link to='/login'>login</Link></li>
                        }



                    </ul>
                </div>
                <div className='flex items-center md:hidden '>

                    <div
                        onClick={() => setOpen(!open)}
                        className={`z-[999]  ${open ? "text-gray-900" : "text-black"
                            } text-3xl md:hidden m-5`}
                    >
                        <ion-icon name="menu"></ion-icon>
                    </div>
                </div>
                <div
                    className={`md:hidden text-gray-900 absolute w-2/3 h-screen
    px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
                        }`}
                >
                    <ul className="flex flex-col  h-full gap-10 py-2 text-lg">

                        <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"><Link to='/'>Home</Link></li>
                        <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"><Link to='/phones'>All Phones</Link></li>
                        <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"><Link to='/dashboard/mycart'>
                            <button className="btn gap-2">
                                <ion-icon name="cart"></ion-icon>
                                <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            </button>
                        </Link></li>
                        {
                            user ? <div>{
                                user && <span className='text-black flex flex-col lg:flex-row lg:items-center gap-4'>
                                    {
                                        isAdmin ? <li onClick={() => setOpen(false)} ><Link to='/dashboard/allusers'>Dashboard</Link></li> : <li onClick={() => setOpen(false)} ><Link to='/dashboard/mycart'>Dashboard</Link></li>
                                    }

                                    <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"> <div className='tooltip text-start' data-tip={user.displayName}  ><img className='w-10 h-10 rounded-full tooltip' src={user.photoURL} alt="" /></div></li> <li className="px-6 hover:text-cyan-600"><Link onClick={handleLogOut} to='/login'>LogOut</Link></li> </span>
                            }</div> : <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600"><Link to='/login'>login</Link></li>
                        }

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;