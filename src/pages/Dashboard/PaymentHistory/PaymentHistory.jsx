import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import PaymentCard from './PaymentCard';

const PaymentHistory = () => {

    const {user}=useContext(AuthContext)
    const [paymentHistory, setPaymentHistory] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/payments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPaymentHistory(data)
            })
    }, [])


    return (
        <div>
            {
                paymentHistory.map(payments=> <PaymentCard key={payments._id} payments={payments}></PaymentCard>)
            }
        </div>
    );
};

export default PaymentHistory;