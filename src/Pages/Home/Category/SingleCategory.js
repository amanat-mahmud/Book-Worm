import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({category}) => {
    return (
        <div>
            <Link to={`/category/${category.category_name}`}>
            <div className="card shadow-xl ">
                <div className="card-body" >
                <button><h2 className=" text-center font-bold text-2xl
                hover:text-[#92B4EC]">{category.category_name}</h2></button>
                </div>
            </div>
            </Link>
    
</div>
    );
};

export default SingleCategory;