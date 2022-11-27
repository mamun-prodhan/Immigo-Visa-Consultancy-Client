import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const Country = () => {
    const [country, setCountry] = useState([]);
    useEffect( ()=>{
        fetch('https://assignment-11-server-green-chi.vercel.app/country')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
    return (
        <div className='my-20'>
            <div className='my-8'>
                <p className='text-center text-orange-600 font-bold text-2xl'>Popular Country</p>
                <p className='text-center text-5xl font-bold'>Immigration Country</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    country.map(contry => <CountryCard
                    key={contry._id}
                    contry={contry}
                    ></CountryCard>)
                }
            </div>
        </div>
    );
};

export default Country;