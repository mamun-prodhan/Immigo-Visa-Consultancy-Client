import React from 'react';
import img1 from '../../../assets/slider/slider1.jpg';
import img2 from '../../../assets/slider/slider2.jpg';
import img3 from '../../../assets/slider/slider3.jpg';
import img4 from '../../../assets/slider/slider4.jpg';
import './Banner.css'
import BannerItem from './BannerItem';


const bannerData = [
    {
        image: img1,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        prev: 3,
        id: 4,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full">

            {
                bannerData.map(slide => <BannerItem
                key={slide.id}
                slide={slide}
                ></BannerItem>)
            }


            {/* <BannerItem image={img1}></BannerItem> */}
            {/* <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> */}
            
        </div>
    );
};

export default Banner;