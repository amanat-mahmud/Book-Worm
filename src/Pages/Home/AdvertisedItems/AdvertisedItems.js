import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedSingleItem from './AdvertisedSingleItem';
const AdvertisedItems = () => {
    const { data: books = [] } = useQuery({
                queryKey: ['books'],
                queryFn: async () => {
                    const res = await fetch('book.json');
                    const data = await res.json();
                    return data
                }
            });
    return (
        <div className='lg:mx-24'>
            <h1 className='text-5xl font-bold'>Advertised {books.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mt-5'>
                {
                    books.map(book=><AdvertisedSingleItem
                    key={book._id}
                    book={book}
                    ></AdvertisedSingleItem>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItems;