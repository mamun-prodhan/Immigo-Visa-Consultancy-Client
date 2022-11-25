import { current } from 'daisyui/src/colors';
import React from 'react';

const Reviews = ({singleReview}) => {
    const {serviceName, price, customer, photoURL, email, review} = singleReview;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">Price: {price}</span>
            </td>
            <td>{review}</td>
        </tr>
    );
};

export default Reviews;