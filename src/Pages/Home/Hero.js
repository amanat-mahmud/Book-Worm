import React from 'react';
import banner from "../../assets/images/hero image.png"
import PrimaryButton from '../../Components/PrimaryButton/PrimaryButton';
const Hero = () => {
    return (
<div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div >
    <img src={banner} className="rounded-lg lg:w-[1200px] " alt='Boys and girls of all age reading'/>
    </div>
    <div className='lg:mx-20'>
      <h1 className="text-5xl font-bold">Want to buy books at low price?</h1>
      <p className="py-6">Book worm provides high quality second hand books at low price. So, that people of all class can earn knowledge and enjoy books.</p>
      <PrimaryButton>{'Buy now'}</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Hero;