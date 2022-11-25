import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Country from '../Country/Country';
import Services from '../Services/Services';

const Home = () => {
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