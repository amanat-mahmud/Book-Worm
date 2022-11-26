import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import SingleItem from '../../Shared/SingleItem';
const AdvertisedItems = () => {
    const [availableCount, setAvailableCount] = useState(0);
    const { data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch('book.json');
            const data = await res.json();
            return data
        }
    });
    const availableAdvertisedBooks = books.filter(book => book.advertised === "yes" && book.available === "yes")
    // console.log(availableAdvertisedBooks);
    return (
        <>
        {   availableAdvertisedBooks.length >0 ?
            <div className='lg:mx-24'>
            <h1 className='text-5xl font-bold'>Advertised</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-5'>
                {
                    books.map(book => book.available === "yes" &&
                        book.advertised === "yes" ?
                        <SingleItem
                            key={book._id}
                            book={book}
                            setAvailableCount={setAvailableCount}
                            availableCount={availableCount}
                        ></SingleItem> : null)
                }
            </div>
            {
                availableAdvertisedBooks.length > 2 ? <div className='text-center mt-10'><Link to="/advertised">
                    <PrimaryButton>See More</PrimaryButton></Link></div> : ''
            }
        </div>: null
        }
        </>
    );
};

export default AdvertisedItems;