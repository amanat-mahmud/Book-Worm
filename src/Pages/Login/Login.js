import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from "react-hook-form";
import { generateToken } from '../../api/generateToken';
import toast from 'react-hot-toast';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [logInError, setLogInError] = useState('');
    const { singIn, googleLogin, setUserRole } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const onSubmit = (data) => {
        setLogInError('');
        singIn(data.email, data.password)
            .then(() => {
                generateToken(data.email)
                .then(()=>{
                    // user role is not done here
                    // is done in other components when needed
                    toast.success("Log in successful")
                    navigate(from, { replace: true })
                })
                
            })
            .catch(err => setLogInError(err.message))
    }
    const handleGoogle = () => {
        googleLogin()
            .then(res => {
                generateToken(res.user.email)
                .then(()=>{
                    setUserRole("user")
                    toast.success("Log in successful")
                    navigate(from, { replace: true })
                })
            })
            

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Log in now!</h1>
                        <p className="py-6">Create an account and deep dive in the ocean of knowledge.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email",
                                        {
                                            required: "Email is required"
                                        })} type="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <p role="alert" className='text-red-600'>
                                        {errors.email?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input {...register("password", {
                                        required: "Password is required",
                                    })} type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn bg-[#92B4EC] border-[#92B4EC]">log in</button>
                                </div>
                                {logInError && <p className='text-red-500'>{logInError}</p>}
                            </form>
                            <p>Don't have an account?<Link className='text-[#92B4EC] underline' to="/signup">Sign up</Link></p>

                            <div className="divider">OR</div>
                            <button className='btn btn-outline w-full' onClick={handleGoogle}>CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;