import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Reviews from '../Reviews/Reviews';
// toast import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const ServiceDetails = () => {
    const { _id, title, price, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    useTitle('Service Details')


    // loading service review based on id
    const [allReview, setAllReview] = useState([]);
    const [isReload, setIsReload] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setAllReview(data))
    }, [isReload])
    console.log(allReview);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = user?.email || 'unregistered';
        const review = form.review.value;

        const serviceReview = {
            service: _id,
            insertDate: new Date(),
            serviceName: title,
            price,
            customer: name,
            photoURL,
            email,
            review
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Review Added Successfully", {
                        position: "top-center",
                        autoClose: 2000,
                    });
                    setIsReload(!isReload)
                }
                form.reset();
                
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            {/* service details section */}
            <div className="hero bg-base-200 rounded-xl">
                <ToastContainer />
                <div className="hero-content text-center">
                    <div className="">
                        <img className='rounded-xl  mx-auto' src={img} alt="UserImage" />
                        <h1 className="text-5xl font-bold mt-5">Service Name: {title}</h1>
                        <p className='text-3xl font-bold mt-5 text-orange-600'>Price: {price}</p>
                        <p className="py-6 text-justify">{description}</p>
                        <button className="btn btn-primary mb-3">Consult Now</button>
                    </div>
                </div>
            </div>


            {/* review section for this service */}
            {
                user?.email ?
                    <>
                        <div className=' text-center my-20'>
                            <h2 className='text-5xl font-bold mt-20 mb-5'>Add a Review <br />For</h2>
                            <div className=''>
                                <h2 className='text-4xl font-bold mb-5 text-orange-600'>Service: {title}</h2>
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        {/* <img src={user?.photoURL} alt="" /> */}
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} alt="" />
                                                : <FaUser></FaUser>
                                        }
                                    </div>
                                </div>
                                <form onSubmit={handleReview} className='bg-base-100 shadow-xl w-1/2 mx-auto p-5 rounded-xl'>
                                    <label className='font-bold' htmlFor="name">Name</label><br />
                                    <input name="name" type="text" placeholder="Your Name" defaultValue={user?.displayName} className="mb-5 input input-bordered input-success w-full max-w-xs" required /> <br />
                                    <label className='font-bold' htmlFor="photoURL">photoURL</label><br />
                                    <input name="photoURL" type="text" placeholder="photoURL" defaultValue={user?.photoURL} className="mb-5 input input-bordered input-success w-full max-w-xs" required /> <br />
                                    <label className='font-bold' htmlFor="email">Email</label><br />
                                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="mb-5 input input-bordered input-success w-full max-w-xs" readOnly /> <br />
                                    <textarea name="review" className="textarea textarea-success" placeholder="Write Review" required></textarea> <br />
                                    <input className='btn my-4' type="submit" value="Add Review" />
                                </form>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <p className='text-4xl font-bold text-center'>Please Login to add a review</p>
                    </>
            }
            {/* all review section start */}
            <div className='mt-10 mb-20 bg-base-100 shadow-xl p-5 rounded-xl'>
                {
                    allReview.length === 0 ?
                        <p className='text-4xl font-bold text-center'>No Reviews Are Added, Please add a Review</p>
                        :
                        <>
                            <p className='text-4xl font-bold my-5 text-center text-orange-600'>{title} : {allReview.length} Reviews</p>

                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th>Customer Info</th>
                                            <th>Service Name</th>
                                            <th>Reviews</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allReview.map((singleReview, index) => <Reviews
                                                key={index}
                                                singleReview={singleReview}
                                            ></Reviews>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;