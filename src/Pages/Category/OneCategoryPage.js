import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryOptions from "./CategoryOptions/CategoryOptions"
import SingleItem from './SingleItem';
const OneCategoryPage = () => {
    const everyBooks = useLoaderData()
    // console.log(everyBooks);

    return (
        <div>
            <CategoryOptions selectedCategory={everyBooks[0].category
            }></CategoryOptions>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mx-10'>
            {
                    everyBooks.map(book => book.available === "yes"?
                        <SingleItem
                            key={book._id}
                            book={book}
                        ></SingleItem> : null)
            }
            </div>
        </div>
    );
};

export default OneCategoryPage;