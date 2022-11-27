import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import ModalBody from './ModalBody/ModalBody';
const SingleItem = ({ book }) => {
    const { bookName, bookImage, description,
        category, reSalePrice, sellerEmail,sellerName,verified } = book;
    const [seller,setSeller] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/user?email=${sellerEmail}`)
        .then(res=>res.json())
        .then(data=>setSeller(data))
    },[sellerEmail])
    const [sendBook,setSendBook] = useState();
    console.log(seller);
    return (
        <div>
            {<div className=" card-compact  shadow-xl">
                <figure><img src={bookImage} alt="Shoes" className='h-[500px] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center'>
                            <p className='font-bold mr-1'>Seller: {seller?.name ?? sellerName}</p>
                            {(seller?.verified === "yes" || verified==="yes") ? <div className='tooltip tooltip-bottom'
                                data-tip="Verified">
                                <FaCheckCircle className='text-[#92B4EC]' />
                            </div> : <div className='tooltip tooltip-bottom' data-tip="Not verified">
                                <FaExclamationCircle className='text-red-500' ></FaExclamationCircle>
                            </div>}
                        </div>
                        <div>
                            <p className='badge bg-[#92B4EC] border-[#92B4EC]
                        text-white font-bold'>{category}</p>
                        </div>
                    </div>

                    <p>{description.slice(0, 120) + '...'}</p>
                    <div className="card-actions justify-between items-center">
                        <p className='text-xl font-bold'>Price: ${reSalePrice}</p>
                        <label htmlFor="my-modal-3" className="btn bg-[#92B4EC] text-white border-0 hover:bg-black" onClick={()=>setSendBook(book)}>Book Now</label>
                    </div>
                </div>
            </div>
            }
            {sendBook && <ModalBody sendBook={sendBook} setSendBook={setSendBook}></ModalBody>}
        </div>
    );
};

export default SingleItem;