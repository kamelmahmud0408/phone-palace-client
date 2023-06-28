import React, { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {googleSignin}=useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogle=()=>{
        googleSignin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            const saveUser = { name: loggedUser.displayName, image: loggedUser.photoURL, email: loggedUser.email }
            fetch('https://phone-palace-server-kamelmahmud0408.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
        })
    }

    return (
        <div>
        <div className="divider"></div>
        <div className=' w-full p-2 text-center'>
            <button onClick={handleGoogle} className="btn btn-square btn-outline ">
            <ion-icon name="logo-google"></ion-icon>
            </button>
        </div>
    </div>
    );
};

export default SocialLogin;