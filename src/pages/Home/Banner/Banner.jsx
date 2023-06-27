import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    const carouselImageHeight = '600px';
    return (
        <Carousel className='text-center'>
        <div style={{ height: carouselImageHeight }}>
            <img style={{ height: '100%' }} src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000' />
           
        </div>
        <div style={{ height: carouselImageHeight }}>
            <img style={{ height: '100%' }} src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000'/>
           
        </div>
        <div>
            <img src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000' />
            
        </div>
        <div>
            <img src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000' />
            
        </div>
        <div>
            <img src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000' />
            
        </div>
    </Carousel>
    );
};

export default Banner;