import React from 'react';
import errorImage from '../../assets/errorDragon.jpg'
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='p-5 relative'>
            <h1 className='bg-red-400 text-xl font-bold text-center m-10 p-5 rounded-lg text-white'>This Link is Unavailable</h1>
            <Link to={`/categories/0`}><button className='btn btn-warning block w-4/12 mx-auto mb-5 text-white'>Back To Home</button></Link>
            <img className='absolute w-[80%] left-[50%] -translate-x-[50%]' src={errorImage} alt="" />
        </div>
    );
};

export default ErrorElement;