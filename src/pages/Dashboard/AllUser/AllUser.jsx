import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin=(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
        })
        .then(res => res.json())
        .then( data =>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='w-full'>
            
            <h2 className='text-3xl font-semibold text-center'>Total Users {users.length}</h2>
            <div className="overflow-x-auto ">
                <table className="table table-zebra w-full my-5">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user,index) => <tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{
                                user.role=== 'admin' ? 'admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost  bg-cyan-500 text-black"><ion-icon name="person-add"></ion-icon></button>}</td>
                            {/* <td>
                                {/* <button onClick={() => handleDelete(user)} className="btn btn-ghost  bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td> */} 
                        </tr> )
                       }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
    
};

export default AllUser;