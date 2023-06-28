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
            <h1 className='text-4xl text-cyan-500 font-bold text-center mt-10'>Our Popular Phone</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 mt-10'>
            {
                phones.slice(0,15).map(phone=> <PhoneDetails key={phone._id} phone={phone}></PhoneDetails>)
            }
        </div>
        </div>
    );
};

export default PopularPhone;