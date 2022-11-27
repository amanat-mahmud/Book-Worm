import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleCategory from './SingleCategory';

const SecondHandProdCategories = () => {
  const { data: allBooks = [] } = useQuery({
    queryKey: ['allBooks'],
    queryFn: async () => {
        const res = await fetch('http://localhost:5000/books');
        const data = await res.json();
        return data
    }
    
});
let allCategory = [];
allBooks.forEach(book => {
        if(!allCategory.includes(book.category)){
            allCategory.push(book.category);
        }
    });
    return (
        <div className='lg:mx-24 my-20'>
          <h1 className='text-5xl font-bold'>Categories</h1>  
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
            {
              allCategory.map((category,idx)=><SingleCategory
              key={idx}
              category = {category}
              ></SingleCategory>)
            }
          </div>
        </div>
    );
};

export default SecondHandProdCategories;