import { useQuery } from '@tanstack/react-query';
import React from 'react';

const SingleCategory = ({category}) => {
    const handleClick = (id)=>{
        console.log(id,'clicked');
    }
    return (
        <div>
            <div className="card shadow-xl "onClick={()=>handleClick(category._id)}>
                <div className="card-body" >
                <button><h2 className=" text-center font-bold text-2xl
                hover:text-[#92B4EC]">{category.category_name}</h2></button>
                </div>
            </div>
    
</div>
    );
};

export default SingleCategory;