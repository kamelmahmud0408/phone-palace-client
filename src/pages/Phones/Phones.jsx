import React, { useEffect, useState } from 'react';
import PhoneDetails from './PhoneDetails';

const Phones = () => {
    const [phones , setPhones]=useState([])

    useEffect(()=>{
        fetch('phone.json')
        .then(res=> res.json())
        .then( data => {
            setPhones(data)
            console.log(data)
        })
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 mt-20'>
            {
                phones.map(phone=> <PhoneDetails key={phone._id} phone={phone}></PhoneDetails>)
            }
        </div>
    );
};

export default Phones;