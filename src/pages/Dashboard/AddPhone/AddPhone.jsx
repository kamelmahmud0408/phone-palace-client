import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddPhone = () => {

    
    // const navigate = useNavigate()
    // const location = useLocation()

    // const from = location.state?.from?.pathname || '/dashboard/myclasses'


    const { user } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const {phoneName,image,email,price,feature,category}=data;
  const phoneItems={
    phoneName,
    image,
    email,
    price,
    feature,
    category
  }
        fetch('http://localhost:5000/phones', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(phoneItems)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Phone added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                //  navigate(from, { replace: true })
            })
    }


    return (
        <div className=' w-full h-full ms-10' >
        <h1 className='text-center text-3xl text-cyan-500 font-bold my-10'>Add a Class</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}

            <div className='grid grid-cols-2 gap-3'>
                <div className='mb-3'>
                    <h3 className='text-xl font-semibold mb-3'>Phone Name</h3>

                    <input
                        className=" w-full p-2 border"
                        {...register("phoneName")}
                        placeholder="Phone Name "

                    />

                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-3'>Phone Image</h3>
                    <input
                        className="w-full p-2 border"
                        {...register("image")}
                        placeholder="image link"
                        type="url"

                    />
                </div>

                
                <div className='mb-3'>
                    <h3 className='text-xl font-semibold mb-3'>Admin Email</h3>

                    <input
                        className="w-full p-2 border"
                        {...register("email")}
                        placeholder="email"
                        defaultValue={user?.email}

                    />

                </div>
                <div className='mb-3'>
                    <h3 className='text-xl font-semibold mb-3'>Price</h3>

                    <input
                        className="w-full p-2 border"
                        {...register("price")}
                        placeholder="Price"

                    />

                </div>
                <div className='mb-3'>
                    <h3 className='text-xl font-semibold mb-3'>Feature</h3>

                    <input
                        className="w-full p-2 border"
                        {...register("feture")}
                        placeholder="Feature"

                    />

                </div>
                <div className='mb-3'>
                    <h3 className='text-xl font-semibold mb-3'>Category</h3>

                    <input
                        className="w-full p-2 border"
                        {...register("category")}
                        placeholder="Category"

                    />

                </div>
                   
            </div>


            <input className=" btn-primary mt-5 w-full" value="Add Class" type="submit" />
        </form>
    </div>
    );
};

export default AddPhone;