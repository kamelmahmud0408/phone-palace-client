import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
            })
            .catch({})
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/3 mt-20 ">
                <img className='w-full' src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=2000" alt="" />

            </div>
            <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name='password'
                            type={showPassword ? 'text' : 'password'} {...register("password", {
                                required: true,

                            })} placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        <span
                            className="mt-2"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <ion-icon name="eye-off"></ion-icon> : <ion-icon name="eye-outline"></ion-icon>}
                        </span>

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-error" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center p-2 font-semibold'><small> Don't Have an Account? please <Link to="/signup"><span className='text-orange-500'>Sign up</span></Link></small></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    </div>
    );
};

export default Login;