import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';

const Login = () => {
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
    <form >
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="text" placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="text" placeholder="password" className="input input-bordered" />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      
    </div>
    </form>
  </div>
</div>
</div>
</div>
    </div>
    );
};

export default Login;