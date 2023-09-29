import React from 'react';
import Category from './Category';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const navigate=useNavigate()
    // navigate('/categories/0')

    return (
        <div>
             <Helmet>
                <title>Home || Dragon News</title>
            </Helmet>

            {/* <h1>Home</h1> */}
            <Category></Category>
            {
                // navigate('/categories/0')
            }
        </div>
    );
};

export default Home;