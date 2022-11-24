import React, { useEffect, useState } from 'react';
import ServicesPageCard from './ServicePageCard';


const ServicesPage = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='my-12'>
                <p className='text-center text-orange-600 font-bold text-2xl'>Services</p>
                <p className='text-center text-5xl font-bold'>My Service Area</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesPageCard
                        key={service._id}
                        service={service}
                    ></ServicesPageCard>)
                }
            </div>
        </div>
    );
};

export default ServicesPage;