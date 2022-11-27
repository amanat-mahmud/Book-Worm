import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({category}) => {
    return (
        <div>
            <Link to={`/category/${category}`}>
            <div className="card shadow-xl ">
                <div className="card-body" >
                <button><h2 className=" text-center font-bold text-2xl
                hover:text-[#92B4EC]">{category}</h2></button>
                </div>
            </div>
            </Link>
    
</div>
    );
};

export default SingleCategory;