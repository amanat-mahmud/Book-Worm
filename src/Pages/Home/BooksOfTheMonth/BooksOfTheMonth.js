import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import SingleBook from './SingleBook';

const BooksOfTheMonth = () => {
    
    const { data: mustReadBooks = [] } = useQuery({
        queryKey: ['mustReadBooks'],
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
                    mustReadBooks.map(book=><SingleBook
                    key={book._id}
                    book={book}
                    
                    ></SingleBook>)
                }
            </div>
            {
                mustReadBooks.length>2 && mustReadBooks ? <div className='text-center mt-10'><PrimaryButton>See More</PrimaryButton></div>:''
            }
        </div>
    );
};

export default BooksOfTheMonth;