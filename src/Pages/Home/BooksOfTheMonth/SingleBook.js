import React from 'react';

const SingleBook = ({ book }) => {
    const { bookImage, description, category, bookName, price, author } = book
    return (
        <div>
            {/* <div className="card-compact shadow-xl">
                <figure><img src={bookImage} alt="Shoes" className='h-[500px] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p className='text-lg font-bold'>{author}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-center text-xl font-bold">
                        Price: ${price}
                    </div>
                </div>
            </div> */}
            <div className="card md:card-side bg-base-100 shadow-xl mx-10 lg:mx-0">
                <figure><img src={bookImage} className="h-full w-full lg:w-[255px]" alt="Book cover" /></figure>
                <div className="card-body lg:w-1/2">
                    <h2 className="card-title">{bookName}</h2>
                    <p className='font-bold'>Author: {author}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <p className='text-xl font-bold'>Price: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;