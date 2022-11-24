import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const {_id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = user?.email || 'unregistered';
        const review = form.review.value;

        const serviceReview = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            photoURL,
            email,
            review
        }
    }

    return (
        <div>
            {/* service details section */}
            <div>
                <h2>{title}</h2>
            </div>


            {/* review section for this service */}
            <div className=' text-center my-20'>
                <h2 className='text-5xl font-bold mt-20 mb-5'>Add a Review <br />For</h2>
                <div className=''>
                    <h2 className='text-4xl font-bold mb-5 text-orange-600'>Service: {title}</h2>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            {/* <img src={user?.photoURL} alt="" /> */}
                            {
                                user?.photoURL ?
                                <img src={user?.photoURL} alt="" />
                                : <FaUser></FaUser>
                            }
                        </div>
                    </div>
                    <form onSubmit={handleReview} className='bg-base-100 shadow-xl w-1/2 mx-auto p-5 rounded-xl'>
                        <label className='font-bold' htmlFor="name">Name</label><br />
                        <input name="name" type="text" placeholder="Your Name" defaultValue={user?.displayName} className="mb-5 input input-bordered input-success w-full max-w-xs" /> <br />
                        <label className='font-bold' htmlFor="photoURL">photoURL</label><br />
                        <input name="photoURL" type="text" placeholder="photoURL" defaultValue={user?.photoURL} className="mb-5 input input-bordered input-success w-full max-w-xs" /> <br />
                        <label className='font-bold' htmlFor="email">Email</label><br />
                        <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="mb-5 input input-bordered input-success w-full max-w-xs" readOnly /> <br />
                        <textarea name="review" className="textarea textarea-success" placeholder="Write Review"></textarea> <br />
                        <input className='btn my-4' type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;