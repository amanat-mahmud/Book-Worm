import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from "react-hook-form";
import { getImageUrl } from '../../api/getImageUrl';
import { generateToken } from '../../api/generateToken';

const SignUp = () => {
    const [singUpError, setSingUpError] = useState('');
    const { signUpUser, updateUser, googleLogin } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        setSingUpError('');
        console.log(data.photo[0]);
        getImageUrl(data.photo[0]).then(imgData => {
            console.log(imgData)
            const user = {
                name: data.name,
                imgUrl: imgData,
                email: data.email,
                role: data.role,
                verified: "no"
            }
            signUpUser(data.email, data.password)
                .then(res => {
                    console.log(user)
                    updateUser(imgData)
                        .then(res => {
                            fetch('http://localhost:5000/user', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(user)
                            })
                                .then(res => {
                                    generateToken(data.email)
                                })
                                .catch()
                            navigate('/')
                        })
                        .catch(err => console.log(err.message))
                })
                .catch(err => setSingUpError(err.message))
        })
    }
    const handleGoogle = () => {
        googleLogin()
        .then(res => {
                const user = {
                    name: res.user.displayName,
                    imgUrl: res.user.photoURL,
                    email: res.user.email,
                    role: "user",
                    verified: "no"
                }
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(response => {
                    generateToken(res.user.email)
                }).catch()
                navigate('/')
            })
        .catch()
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Create an account and deep dive in the ocean of knowledge.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name", {
                                        required: "Name is required"
                                    })} type="text" placeholder="Your name" className="input input-bordered" />
                                    {errors.name && <p role="alert" className='text-red-600'>
                                        {errors.name?.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select Role</span>
                                    </label>
                                    <select className="select select-bordered w-full max-w-xs" {...register("role")}>
                                        <option value={"user"}>User</option>
                                        <option value={"seller"}>Seller</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Upload your image</span>
                                    </label>
                                    <input {...register("photo", {
                                        required: "Image is required"
                                    })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                                    {errors.photo && <p role="alert" className='text-red-600'>
                                        {errors.photo?.message}</p>}
                                </div>
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
                                        minLength: { value: 6, message: "Password must be 6 characters long" },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                                    })} type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn bg-[#92B4EC] border-[#92B4EC]">Sign up</button>
                                </div>
                                {singUpError && <p className='text-red-500'>{singUpError}</p>}
                            </form>
                            <p>Already have an account?<Link className='text-[#92B4EC] underline' to="/login">Sign in</Link></p>

                            <div className="divider">OR</div>
                            <button className='btn btn-outline w-full' onClick={handleGoogle}>CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;