import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import SingleCategory from './SingleCategory';

const SecondHandProdCategories = () => {
  const { data: allBooks = [] } = useQuery({
    queryKey: ['allBooks'],
    queryFn: async () => {
      const res = await fetch('https://book-worm-server-omega.vercel.app/books');
      const data = await res.json();
      return data
    }

  });
  let allCategory = [];
  allBooks.forEach(book => {
    if (!allCategory.includes(book.category)) {
      allCategory.push(book.category);
    }
  });
  return (
    <div className='lg:mx-24 my-20'>
      <h1 className='text-5xl font-bold'>Categories</h1>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
        {
          allCategory.slice(0, 6).map((category, idx) => <SingleCategory
            key={idx}
            category={category}
          ></SingleCategory>)
        }

      </div>
      {
        allCategory.length > 6 && <div className='text-center mt-5'>
          <Link to="/categories"><PrimaryButton>See More</PrimaryButton></Link>
        </div>
      }
    </div>
  );
};

export default SecondHandProdCategories;