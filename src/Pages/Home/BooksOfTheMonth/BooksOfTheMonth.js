import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleBook from './SingleBook';

const BooksOfTheMonth = () => {
    const { data: mustReadbooks = [] } = useQuery({
        queryKey: ['mustReadbooks'],
        queryFn: async () => {
            const res = await fetch('mustRead.json');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='lg:mx-24 my-20'>
            <h1 className='text-5xl font-bold'>Books of the month</h1>
            <p className='badge bg-[#92B4EC] border-[#92B4EC]'>Must read</p>
            {/* md:grid-cols-2
            lg:grid-cols-3 */}
            <div className='mt-5 grid grid-cols-1  gap-2 lg:gap-4'>
                {
                    mustReadbooks.map(book=><SingleBook
                    key={book._id}
                    book={book}
                    ></SingleBook>)
                }
            </div>
        </div>
    );
};

export default BooksOfTheMonth;