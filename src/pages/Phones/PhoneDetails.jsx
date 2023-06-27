import React from 'react';

const PhoneDetails = ({ phone }) => {
    const {name, image, price, features } = phone;
    return (
        <div className="card w-full  bg-base-100 shadow-sm">
            <figure><img className='object-cover h-96' src={image} alt="phone" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price: ${price}</p>
                {
                    features.map(feature=> <li>{feature}</li>)
                }
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;