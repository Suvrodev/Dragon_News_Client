import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import LeftNav from '../../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../../Pages/Shared/RightNav/RightNav';
import './Main.css'

const Main = () => {
    return (
        <div>
            <Header></Header>

            <section className='Grid'>
                <div className="Left">
                    <LeftNav></LeftNav>
                </div>
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

export default Main;