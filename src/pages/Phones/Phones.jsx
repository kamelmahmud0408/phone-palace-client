import React, { useEffect, useState } from 'react';
import PhoneDetails from './PhoneDetails';

const Phones = () => {
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
            <div className='bg-white p-10'>
            <h1 className='text-4xl text-cyan-500 font-bold text-center mt-20 mb-5'>All Phones</h1>
            <p className='mx-20 text-justify'>
                Welcome to our PhonePalace website! We are dedicated to providing you with comprehensive information, reviews, and resources to help you make informed decisions when it comes to phones.

                At our website, you'll find a wide range of articles and guides covering various aspects of phones, including the latest models, features, technologies, and trends in the ever-evolving world of mobile devices. Whether you're a tech enthusiast, a casual user, or someone looking for advice on purchasing a new phone, we've got you covered.

                Our team of experts works diligently to bring you up-to-date and unbiased reviews of the latest smartphones from all major brands. We delve into the specifications, performance, design, camera capabilities, and overall user experience of each device, providing you with valuable insights to help you choose the perfect phone that meets your needs and preferences.
            </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 '>
                {
                    phones.map(phone => <PhoneDetails key={phone._id} phone={phone}></PhoneDetails>)
                }
            </div>
        </div>
    );
};

export default Phones;