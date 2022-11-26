import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Country from '../Country/Country';
import Services from '../Services/Services';

const Home = () => {
    useTitle('IMMIGO Visa Consultancy');
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Country></Country>
            
        </div>
    );
};

export default Home;