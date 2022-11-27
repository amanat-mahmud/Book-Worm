import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleCategory from '../Home/Category/SingleCategory';
import SingleItem from './SingleItem';

const Category = () => {
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
        if (!allCategory.includes(book.category)) {
            allCategory.push(book.category);
        }
    });
    console.log(allCategory);
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 mx-10'>
            {
              allCategory.map((category,idx)=><SingleCategory
              key={idx}
              category = {category}
              ></SingleCategory>)
            }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mx-10'>
                {
                    allBooks.map(book => book.available === "yes"?
                        <SingleItem
                            key={book._id}
                            book={book}
                        ></SingleItem> : null)
                }
            </div>
        </div>
    );
};

export default Category;