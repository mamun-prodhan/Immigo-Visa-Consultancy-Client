import React from 'react';

const AddService = () => {

    const handleAddService = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.imageURL.value;
        const price = form.price.value;
        const description = form.description.value;

        const addService = {
            title: title,
            img: img,
            price: price,
            description: description
        }

        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                window.alert('order Places successfully');
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <div className='my-16'>
            <h2 className='text-4xl font-bold text-center mb-3'>Add a Service</h2>
            <div  className='bg-base-100 shadow-xl rounded-xl  p-8 w-full mx-auto max-w-xs'>
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
                    <input name='imageURL' type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input name='price' type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" required/>
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input name='description' type="text" placeholder="Service Description" className="input input-bordered w-full max-w-xs" required/>
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