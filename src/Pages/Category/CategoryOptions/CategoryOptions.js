import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleCategory from '../../Home/Category/SingleCategory';

const CategoryOptions = ({ selectedCategory }) => {
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
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 mx-10'>
                {
                    allCategory.map((category, idx) => <SingleCategory
                        key={idx}
                        category={category}
                        selectedCategory={selectedCategory}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryOptions;