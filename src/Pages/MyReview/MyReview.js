import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';
// toast import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [isReload, setIsReload] = useState(true);
    useTitle('My Review');

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                   return logOut();
                }
              return  res.json();
            })
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email, isReload, logOut])

    const handleDelete = id => {
        const proceed = window.confirm("Do you want to delete this review");
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success("Deleted Successfully", {
                            position: "top-center",
                            autoClose: 2000,
                        });
                        const remaining = myReviews.filter(review => review._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }


    return (
        <div className='my-20'>
            <ToastContainer />
            <div className='my-12'>
                <p className='text-center text-orange-600 font-bold text-2xl'>Reviews</p>
                <p className='text-center text-5xl font-bold'>My All Reviews</p>
            </div>
            {
                myReviews.length === 0 ?
                    <p className='text-4xl font-bold text-red-600 text-center my-20'>You have No Reviews</p>
                    :
                    <>
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                myReviews.map(myreview => <ReviewCard
                                    key={myreview._id}
                                    myreview={myreview}
                                    handleDelete={handleDelete}
                                    isReload={isReload}
                                    setIsReload={setIsReload}

                                ></ReviewCard>)
                            }
                        </div>
                    </>
            }

        </div>
    );
};

export default MyReview;