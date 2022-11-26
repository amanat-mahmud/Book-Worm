import React from 'react';

const AddProduct = () => {
    return (
        <div >
            <form className='mb-10'>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Book name</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Author</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text w-4/5 md:w-1/2  md:mx-auto mx-10">Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 w-4/5 md:w-1/2  md:mx-auto mx-10"></textarea>
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Mobile no.</span>
                    </label>
                    <input type="number" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Buying Price</span>
                    </label>
                    <input type="text" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10 mb-5">
                    <label className="label">
                        <span className="label-text">Year of use</span>
                    </label>
                    <input type="number" className="input input-bordered w-full" />
                </div>
                <div className='text-center'>
                <button  className="btn bg-[#92B4EC] border-[#92B4EC]" type="submit">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;