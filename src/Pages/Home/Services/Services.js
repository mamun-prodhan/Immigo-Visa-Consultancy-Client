import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-green-chi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20 p-4 md:p-0'>
            <div className='my-12'>
                <p className='text-center text-orange-600 font-bold text-2xl mb-4'>Services</p>
                <p className='text-center text-5xl font-bold'>My Service Area</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-12'>
               <Link to="/allservices"><button className="btn btn-primary">See All</button></Link> 
            </div>
        </div>
    );
};

export default Services;