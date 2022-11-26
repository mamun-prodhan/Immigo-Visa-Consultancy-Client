import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, img, price, title, description} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="serviceImage" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-bold'>Price: ${price}</p>
                <p className='text-justify'>
                    {description.length > 100 ?
                    <>{description.slice(0, 100) + ' ...'}</>
                    :
                    description
                }
                </p>
                <div className="card-actions justify-start">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;