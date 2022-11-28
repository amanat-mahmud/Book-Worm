import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleItem from "../Category/SingleItem"
const Advertised = () => {
    const { data: books = [] } = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch('https://book-worm-server-omega.vercel.app/books');
            const data = await res.json();
            return data
        }
    });
    const availableAdvertisedBooks = books.filter(book => book.advertised === "yes" && book.available === "yes")

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-5 mx-10'>
            {
                availableAdvertisedBooks.reverse().slice().map(book => book.available === "yes" &&
                    book.advertised === "yes" ?
                    <SingleItem
                        key={book._id}
                        book={book}
                    ></SingleItem> : null)
            }
        </div>
    );
};

export default Advertised;