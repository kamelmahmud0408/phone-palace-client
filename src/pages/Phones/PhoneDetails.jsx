import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';

const PhoneDetails = ({ phone }) => {
    const {_id,name, image, price, features } = phone;

    const { user } = useContext(AuthContext)
    const location = useLocation()
    const navigate= useNavigate()
    const [,refetch]=useCart()
    const handleAddToCart = (item) => {
        console.log(item)
        if (user && user.email) {
            const cartItem={phoneItemId:_id, name, image, price ,email: user.email}
            fetch('https://phone-palace-server-kamelmahmud0408.vercel.app/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Phone added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please login to the order Phone',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'please login'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state: {from: location}}) 
                }
            })
        }
    }

    return (
        <div className="card w-full  bg-base-100 shadow-sm">
            <figure><img className='object-cover h-96' src={image} alt="phone" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                {
                    features.map(feature=> <li>{feature}</li>)
                }
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(phone)}  className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;