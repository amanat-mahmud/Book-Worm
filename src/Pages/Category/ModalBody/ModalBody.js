import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const ModalBody = ({sendBook,setSendBook}) => {
    const {user} = useContext(AuthContext);
    const { bookName, reSalePrice,sellerEmail } = sendBook;
    const handleSubmit = (event) => {
    event.preventDefault()
    const order = {
        product_id :sendBook._id,
        product_name:bookName,
        product_price:reSalePrice,
        product_image: sendBook.bookImage,
        productAvailability: sendBook.available,
        sellerEmail,buyerEmail:user.email,
        user_phone : event.target.phone.value,
        user_location : event.target.location.value,
    }
        fetch('http://localhost:5000/order',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{if(data.acknowledged)
            {
                toast.success("Booked");
                setSendBook(null);
            }
        })
        .catch()
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2"
                    onClick={()=>setSendBook(null)}>✕</label>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                        <div className="form-control w-full  md:mx-auto mx-10">
                            <label className="label">
                                <span className="label-text">Buyer Name</span>
                                
                            </label>
                            <input type="text" defaultValue={user?.displayName} className="input input-bordered w-full" disabled />
                        </div>
                        <div className="form-control w-full  md:mx-auto mx-10">
                            <label className="label">
                                <span className="label-text">Buyer Email</span>
                                
                            </label>
                            <input type="text" defaultValue={user?.email} className="input input-bordered w-full" disabled/>
                        </div>
                        <div className="form-control w-full  md:mx-auto mx-10">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <input type="text" defaultValue={bookName} className="input input-bordered w-full" disabled/>
                        </div>
                        <div className="form-control w-full  md:mx-auto mx-10">
                            <label className="label">
                                <span className="label-text">Price</span>
                                
                            </label>
                            <input type="text" defaultValue={reSalePrice} className="input input-bordered w-full" disabled/>
                        </div>
                        <div className="form-control w-full  md:mx-auto mx-10">
                            <label className="label">
                                <span className="label-text">Phone no.</span>
                                
                            </label>
                            <input type="number" name='phone' className="input input-bordered w-full" required/>
                        </div>
                        <div className="form-control w-full  md:mx-auto mx-10">
                            <label className="label">
                                <span className="label-text">Location</span>
                                
                            </label>
                            <input type="text" name='location' className="input input-bordered w-full" required/>
                        </div>


                        <input type="submit" value="Submit" className='btn bg-[#92B4EC] text-white border-0 hover:bg-black'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalBody;