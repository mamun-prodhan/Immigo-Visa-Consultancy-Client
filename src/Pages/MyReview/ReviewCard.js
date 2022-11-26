import React from 'react';
import { Link } from 'react-router-dom';
import UpdateModal from '../UpdateModal/UpdateModal';

const ReviewCard = ({myreview,setIsReload, isReload, handleDelete}) => {
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
                    
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary btn-sm">Delete</button>
                        {/* <button className="btn btn-primary ml-3">Update</button> */}
                        <UpdateModal 
                        myreview={myreview}
                        setIsReload={setIsReload}
                        isReload={isReload}
                        />
                    
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;