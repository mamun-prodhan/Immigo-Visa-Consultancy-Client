import React from 'react';
import image1 from '../../../assets/icons/goal.png';
import image2 from '../../../assets/icons/airplane.png';
import image3 from '../../../assets/about/about.jpg';
import image4 from '../../../assets/about/text.JPG';


const About = () => {
    return (
        <div className="hero bg-base-200 my-20">
            <div className="hero-content flex-col lg:flex-row-reverse p-14">
                <div className='w-1/2  relative'>
                    <img src={image3} alt="" className="rounded-lg shadow-2xl" />
                    <img src={image4} alt="" className="absolute left-16 top-3/4 rounded-lg shadow-2xl" />
                    
                </div>
                <div className='w-1/2'>
                    <p className='text-orange-600 font-bold text-2xl'>About</p>
                    <h1 className="text-5xl font-bold  my-5">IMMIGO Visa <br />Consulting</h1>
                    <p className="">IMMIGO Visa Consultancy is one of the leading companies supporting applicants for Immigration, Tourist Visa, Medical Tourism and expanding into student visa support. With locations in Bangladesh, Thailand, Singapore, UK and Australia, we are well equipped with lawyers who would help you in pursuit of your immigration.</p>

                    <div className='flex py-6 items-center justify-center'>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div  className='ml-4'>
                            <h4 className='text-orange-600 font-bold text-2xl'>Our Mission</h4>
                            <p>Visa Consultancy is one of the leading companies supporting applicants for Immigration, Tourist Visa, Medical Tourism and expanding into student visa support.</p>
                        </div>
                    </div>
                    <div className='flex py-6 items-center justify-center'>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                        <div  className='ml-4'>
                            <h4 className='text-orange-600 font-bold text-2xl'>Our Strategy</h4>
                            <p>IMMIGO Visa Consultancy is one of the leading companies supporting applicants for Immigration, Tourist Visa, Medical Tourism and expanding into student visa support.</p>
                        </div>
                    </div>

                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;