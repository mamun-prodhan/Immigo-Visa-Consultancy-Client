import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { title } = useLoaderData();
    const { user } = useContext(AuthContext);
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
                    <form className='bg-base-100 shadow-xl w-1/2 mx-auto p-5 rounded-xl'>
                        <input name="name" type="text" placeholder="Your Name" className="mb-5 input input-bordered input-success w-full max-w-xs" /> <br />
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