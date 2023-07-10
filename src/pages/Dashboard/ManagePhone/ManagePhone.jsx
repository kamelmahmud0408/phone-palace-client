import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManagePhone = () => {

    const { user } = useContext(AuthContext)
    // const [myPhone, setmyPhone] = useState([])
    const [axiosSecure] = useAxiosSecure();
    const { data: myPhones = [], refetch } = useQuery(['myphone'], async () => {
        const res = await axiosSecure.get(`/myphone?email=${user?.email}`)
        return res.data;
    })

    const {id}=useParams()

    // useEffect(() => {
    //     const url = `http://localhost:5000/myphone?email=${user?.email}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {

    //             setmyPhone(data)
    //         })
    // }, [user])

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/phones/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            
                            // const remainingToys = myPhone.filter(phone => phone._id !== id)
                            // setmyPhone(data)
                            // (remainingToys)
                            
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto w-full h-full my-10">
            <table className="table">
                { }
                <thead>
                    <tr>
                        <th>#</th>
                        <th>image</th>
                        <th>Phone Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Email</th>
                        <th>update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {myPhones.map((phoneItem, index) => <tr key={phoneItem._id}>
                        <td>{index + 1}</td>
                        <td><img className='w-14 h-14 rounded-full' src={phoneItem.image} alt="" /></td>
                        <td>{phoneItem.phoneName}</td>
                        <td>{phoneItem.price}</td> 
                        <td>{phoneItem.category}</td>
                        <td>{phoneItem.email}</td>
                        <td>{phoneItem._id}</td>
                        <td>
                            <Link to={`/dashboard/updatephone/${phoneItem._id}`}><button className='btn-primary btn-xs'>Update</button></Link>
                        </td>
                        <td><button onClick={() => handleDelete(phoneItem._id)} className='btn-primary btn-xs'>Delete</button></td>

                    </tr>)}


                </tbody>
            </table>
        </div>
    );
};

export default ManagePhone;