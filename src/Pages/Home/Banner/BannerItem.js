import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-10 md:left-24 top-1/4">
                    <h1 className='text-3xl md:text-6xl font-bold text-white'>
                        IMMIGO<br />
                        Visa Consultancy
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-10 md:left-24 top-1/2">
                    <p className='text-xl text-white hidden lg:block'>IMMIGO Consultants is one of the best and leading Student Visa Consultancy Firm in Bangladesh offers comprehensive educational services to students who have strong desire and intention of studying in internationally well reputed institutions in the UK, Canada, USA, Australia, and Malaysia.</p>
                    <p className='text-xl hidden md:block lg:hidden text-white'>IMMIGO Consultants is one of the best and leading Student Visa Consultancy Firm in Bangladesh.</p>
                    <p className='block md:hidden text-white mt-4 md:mt-0'>The best Consultancy Firm in Bangladesh.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-10 md:left-24 md:top-3/4 top-3/4">
                    <button className="btn btn-warning mr-5 btn-xs sm:btn-sm md:btn-md lg:btn-lg">Consult Now</button>
                    <button className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">More Info</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;