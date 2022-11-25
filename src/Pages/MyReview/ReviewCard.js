import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({myreview}) => {
    const {_id, service, serviceName, price, customer, photoURL, email, review} = myreview;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-4 py-3">
            <div className="card-body">
                <h2 className="font-bold text-center">Service Name: {serviceName}</h2>
                <p className='text-sm text-center'>Price: ${price}</p>
                <p className='text-sm text-center'>Email: {email}</p>
                <p className='font-bold text-center'>
                    Review: {review}
                </p>
                <div className="card-actions justify-evenly mt-2">
                    
                        <button className="btn btn-primary">Delete</button>
                        <button className="btn btn-primary ml-3">Update</button>
                    
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;