import React, { useEffect, useState } from 'react';
import PhoneDetails from './PhoneDetails';

const Phones = () => {
    const [phones , setPhones]=useState([])

    useEffect(()=>{
        fetch('https://phone-palace-server-kamelmahmud0408.vercel.app/phones')
        .then(res=> res.json())
        .then( data => {
            setPhones(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-4xl text-cyan-500 font-bold text-center mt-20'>All Phones</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 mt-20'>
            {
                phones.map(phone=> <PhoneDetails key={phone._id} phone={phone}></PhoneDetails>)
            }
        </div>
        </div>
    );
};

export default Phones;