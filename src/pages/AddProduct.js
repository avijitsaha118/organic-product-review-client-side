import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = (event) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/information`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            });
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add Your Pet Details</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' required {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Company Name' required {...register("Company Name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Description' required {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" required {...register("price")} />
                <input className='mb-2' placeholder='Review' type="text" {...register("review")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;