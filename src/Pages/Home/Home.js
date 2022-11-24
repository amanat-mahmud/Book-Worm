import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Hero from './Hero';
import SecondHandProdCategories from './Category/SecondHandProdCategories';
import BooksOfTheMonth from './BooksOfTheMonth/BooksOfTheMonth';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AdvertisedItems></AdvertisedItems>
            <SecondHandProdCategories></SecondHandProdCategories>
            <BooksOfTheMonth></BooksOfTheMonth>
        </div>
    );
};

export default Home;