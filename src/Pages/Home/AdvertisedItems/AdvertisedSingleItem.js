import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
const AdvertisedSingleItem = ({ book }) => {
    const { bookName, author, bookImage, location, description,
        category, reSalePrice, originalPrice, yearOfUse, posted,
        sellerName, sellerEmail, verified, reported, reportedBy,
        available, advertised } = book
    return (
        <div>
            {available === "yes" ? <div className=" card-compact  shadow-xl">
                <figure><img src={bookImage} alt="Shoes" className='h-[500px] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <div className='flex justify-between'>
                        <div className='flex justify-center items-center'>
                            <p className='font-bold mr-1'>Seller: {sellerName}</p>
                            {verified === "yes" ? <div className='tooltip tooltip-bottom'
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
                        <PrimaryButton>Book now</PrimaryButton>
                    </div>
                </div>
            </div> : null}
        </div>
    );
};

export default AdvertisedSingleItem;