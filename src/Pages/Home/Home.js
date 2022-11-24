import React from 'react';
import AdvertisedItems from './AdvertisedItems/AdvertisedItems';
import Hero from './Hero';
import SecondHandProdCategories from './SecondHandProdCategories';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AdvertisedItems></AdvertisedItems>
            <SecondHandProdCategories></SecondHandProdCategories>
        </div>
    );
};

export default Home;