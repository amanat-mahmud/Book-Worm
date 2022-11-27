import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({category,selectedCategory}) => {
    return (
        <div>
            <Link to={`/category/${category}`}>
            <div className={`card shadow-xl ${selectedCategory ===category ? 'bg-[#92B4EC] text-white':''}`}>
                <div className={`card-body `} >
                <button><h2 className={ `text-center font-bold text-2xl  ${selectedCategory ===category ? 'hover:text-black':'hover:text-[#92B4EC]'}
                `}>{category}</h2></button>
                </div>
            </div>
            </Link>
    
</div>
    );
};

export default SingleCategory;