import React from 'react';

const PaymentCard = ({ payments }) => {
    const { email, transactionId, date, quantity, price, itemNames } = payments;
    return (
        <div className="card w-full  bg-base-100  image-full">
            
            <div className="card-body">
                <h2 className="card-title">Item Name</h2>
                {
                    itemNames.map(item=><li>{item}</li>)
                }
               <div>
                <h2 className='font-bold'>Email: {email}</h2>
                <h2 className='font-semibold'>TransectionId: {transactionId}</h2>
                <p className='font-semibold'>Price: ${price}</p>
                <p className='font-semibold'>Date: {date}</p>
               </div>
                
            </div>
        </div>
    );
};

export default PaymentCard;