import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel className='text-center'>
        <div>
            <img src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000' />
           
        </div>
        <div>
            <img src='https://img.freepik.com/premium-vector/online-shopping-concept-shopping-cart-with-bags-standing-upon-big-mobile-phone-flat-vector-design_196604-35.jpg?w=2000'/>
           
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