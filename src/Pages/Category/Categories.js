import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryOptions from './CategoryOptions/CategoryOptions';
import SingleItem from './SingleItem';

const Categories = () => {
    const { data: allBooks = [] } = useQuery({
        queryKey: ['allBooks'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/books');
            const data = await res.json();
            return data
        }
    });
    return (
        <div>
            <CategoryOptions></CategoryOptions>
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

export default Categories;