import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleCategory from './SingleCategory';

const SecondHandProdCategories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
        const res = await fetch('category.json');
        const data = await res.json();
        return data
    }
});
    return (
        <div className='lg:mx-24 my-20'>
          <h1 className='text-5xl font-bold'>Categories</h1>  
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            {
              categories.map(category=><SingleCategory
              key={category._id}
              category = {category}
              ></SingleCategory>)
            }
          </div>
        </div>
    );
};

export default SecondHandProdCategories;