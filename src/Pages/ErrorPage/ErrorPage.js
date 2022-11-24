import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
import errorImage from "../../assets/images/errorImage.jpg"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>   
<main class="bg-white overflow-hidden h-screen relative">
    <div class="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
        <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
            <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
                <h1 class="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
                    Sorry, this page isn&#x27;t available
                </h1>
                <div className='mt-10'>
                <Link to="/"><PrimaryButton className={"w-1/4"}>Go home</PrimaryButton></Link>
                </div>
            </div>
            <div class="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
                <img src={errorImage} alt="error"/>
            </div>
        </div>
    </div>
</main>

        </div>
    );
};

export default ErrorPage;