import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    
    return (
        <Carousel className='text-center'>
        <div className='h-80'>
            <img src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000' />
           
        </div>
        <div className='h-80'>
            <img  src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000'/>
           
        </div>
        <div className='h-80'>
            <img src='https://img.freepik.com/premium-vector/online-shopping-purple-banner-with-smartphone-with-volumetric-title-button-web-banner-your-website_7993-6441.jpg?w=2000' />
            
        </div>
        <div className='h-80'>
            <img src='https://img.freepik.com/premium-vector/shopping-online-design-mobile-app-concept-illustration_190827-858.jpg' />
            
        </div>
        <div>
            <img src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000' />
            
        </div>
    </Carousel>
    );
};

export default Banner;