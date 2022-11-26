import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { getImageUrl } from '../../../../api/getImageUrl';
import { AuthContext } from '../../../../context/AuthProvider';
;

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {user} = useContext(AuthContext)
    const { data: seller = [] } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user?email=${user.email}`);
            const data = await res.json();
            return data
        }
    }); 
    const onSubmit = (data) => {
        const bookName = data.name;
        const author = data.author;
        const reSalePrice = data.price;
        const category = data.category;
        const condition = data.condition;
        const description = data.description;
        const sellerEmail = seller.email;
        const sellerPhone = data.mobile;
        const sellerLocation = data.location
        const yearOfUse = data.used
        const originalPrice = data.buyPrice
        getImageUrl(data.photo[0]).then(imgData => {
            const book= {
                bookName,author,reSalePrice,category,condition,description,sellerLocation,yearOfUse,originalPrice,
                bookImage:imgData,sellerPhone,
                sellerEmail,available:"yes",advertised:false
            }
            fetch('http://localhost:5000/book',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(book)
        }).then().catch()
        })
        toast.success("Book added")
    }
    return (
        <div >
            <form className='mb-10' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Book name</span>
                    </label>
                    <input {...register("name", { required: "Book name is required" })} type="text" className="input input-bordered w-full" />
                    {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Author</span>
                    </label>
                    <input {...register("author", { required: "Author is required" })} type="text" className="input input-bordered w-full" />
                    {errors.author && <p role="alert" className='text-red-600'>{errors.author?.message}</p>}
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input {...register("price", { required: "Price is required" })} type="number" className="input input-bordered w-full" />
                    {errors.price && <p role="alert" className='text-red-600'>{errors.price?.message}</p>}
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Upload Image</span>
                    </label>
                    <input {...register("photo", {
                        required: "Image is required"
                    })} type="file" className="file-input file-input-bordered w-full " />
                    {errors.photo && <p role="alert" className='text-red-600'>
                        {errors.photo?.message}</p>}
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input {...register("category", { required: "Category is required" })} type="text" className="input input-bordered w-full" />
                    {errors.category && <p role="alert" className='text-red-600'>
                        {errors.category?.message}</p>}
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <select {...register("condition")} className="select select-bordered">
                        <option selected>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: "Description is required" })} className="textarea textarea-bordered h-24 "></textarea>
                    {errors.description && <p role="alert" className='text-red-600'>
                        {errors.description?.message}</p>}
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Mobile no.</span>
                    </label>
                    <input defaultValue={seller?.phone ?? ''} 
                    {...register("mobile")} type="number" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input {...register("location", { required: "Location is required" })} type="text" className="input input-bordered w-full" />
                    {errors.location && <p role="alert" className='text-red-600'>
                        {errors.location?.message}</p>}
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10">
                    <label className="label">
                        <span className="label-text">Buying Price</span>
                    </label>
                    <input {...register("buyPrice", { required: "Buying Price is required" })} type="number" className="input input-bordered w-full" />
                    {errors.buyPrice && <p role="alert" className='text-red-600'>
                        {errors.buyPrice?.message}</p>}
                </div>
                <div className="form-control w-4/5 md:w-1/2  md:mx-auto mx-10 mb-5">
                    <label className="label">
                        <span className="label-text">Year of use</span>
                    </label>
                    <input {...register("used", { required: "Year of use is required" })} type="number" className="input input-bordered w-full" />
                    {errors.used && <p role="alert" className='text-red-600'>
                        {errors.used?.message}</p>}
                </div>
                <div className='text-center'>
                    <button className="btn bg-[#92B4EC] border-[#92B4EC]" type="submit">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;