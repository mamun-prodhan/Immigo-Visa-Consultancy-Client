import React from 'react';

const CountryCard = ({contry}) => {
    const {img, title, description} = contry
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={img} className="rounded-xl" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;