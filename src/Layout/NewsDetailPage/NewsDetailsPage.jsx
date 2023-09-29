import React from 'react';
import './NewsDetailsPage.css'
import Header from '../../Pages/Shared/Header/Header';
import LeftNav from '../../Pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../../Pages/Shared/RightNav/RightNav';
import Footer from '../../Pages/Shared/Footer/Footer';
import EditorsInside from '../../Pages/EditorsInside/EditorsInside';
import { Helmet } from 'react-helmet-async';

const NewsDetailsPage = () => {
    return (
        <div>

            <Helmet>
                <title>Detail News || Dragon News</title>
            </Helmet>

        <Header></Header>

        <section className='Grid_'>
            <div className="mid">
                <Outlet></Outlet>
            </div>
            <div className="Right">
               <RightNav></RightNav>
            </div>
        </section>
        <Footer></Footer>
    </div>
    );
};

export default NewsDetailsPage;