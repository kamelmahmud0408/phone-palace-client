import React, { useEffect, useState } from 'react';
import PhoneDetails from '../../Phones/PhoneDetails';

const PopularPhone = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/phones')
            .then(res => res.json())
            .then(data => {
                setPhones(data)
                console.log(data)
            })
    }, [])
    return (
        <div>
            <div className='p-10'>
            <h1 className='text-4xl text-cyan-500 font-bold text-center  mb-5'>Our Popular Phone</h1>
            <p className='text-justify mx-20'>
                Discover the world of popular phones at our website! We bring you detailed insights and reviews on the hottest and most sought-after smartphones in the market.

                Our dedicated team of experts carefully examines each popular phone, dissecting its features, performance, design, camera capabilities, and more. We provide you with an in-depth understanding of what sets these devices apart, enabling you to make an informed decision when choosing your next phone.

                From flagship models to mid-range marvels, we cover a wide range of popular phones from renowned brands. Whether you're interested in the latest iPhone, the cutting-edge Samsung Galaxy series, or the innovative offerings from Google, OnePlus, or Xiaomi, we have you covered.
            </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 mt-10'>
                {
                    phones.slice(0, 15).map(phone => <PhoneDetails key={phone._id} phone={phone}></PhoneDetails>)
                }
            </div>
        </div>
    );
};

export default PopularPhone;