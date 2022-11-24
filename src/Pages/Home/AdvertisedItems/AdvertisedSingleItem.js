import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const AdvertisedSingleItem = ({book}) => {
    const {bookName,author,bookImage,location,description,
    category,reSalePrice,originalPrice,yearOfUse,posted,
    sellerName,sellerEmail,verified,reported,reportedBy,
    available,advertised} = book
    return (
        <div>
          <div className=" card-compact  shadow-xl">
                    <figure><img src={bookImage} alt="Shoes" className='h-[500px] w-full'/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{bookName}</h2>
                        <p>{description.slice(0,120)+'...'}</p>
                        <div className="card-actions justify-end">
                            <PrimaryButton>Book now</PrimaryButton>
                        </div>
                    </div>
                </div>  
        </div>
    );
};

export default AdvertisedSingleItem;