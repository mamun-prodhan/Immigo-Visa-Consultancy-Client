import React from 'react';
// toast import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';


const AddService = () => {

    useTitle('Add Service');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.imageURL.value;
        const price = form.price.value;
        const description = form.description.value;

        const addService = {
            title: title,
            insertDate: new Date(),
            img: img,
            price: price,
            description: description
        }

        fetch('https://assignment-11-server-green-chi.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Serivce Added Successfully", {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='my-16'>
            <ToastContainer />
            <h2 className='text-4xl font-bold text-center mb-3'>Add a Service</h2>
            <div className='bg-base-100 shadow-xl rounded-xl  p-8 w-full mx-auto max-w-xs'>
                <form onSubmit={handleAddService}>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Service Title</span>
                        </label>
                        <input name='title' type="text" placeholder="Service Title" className="input input-bordered mx-auto w-full max-w-xs" required />
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input name='imageURL' type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control mx-auto w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input name='description' type="text" placeholder="Service Description" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className='text-center mt-5'>
                        <input className='btn' type="submit" value="Add Service" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;