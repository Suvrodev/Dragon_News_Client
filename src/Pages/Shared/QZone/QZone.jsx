import React from 'react';
import './QZone.css'
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

import bg from '../../../assets/bg.png'

const QZone = () => {
    return (
        <div className='my-2 bg-slate-400 overflow-auto p-2'>
            <h1 className='text-xl my-2 font-bold'> Q-Zone</h1>
            <div className='text-center flex flex-col'>
                <img className='' src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>


            <div className='my-2 relative bg-green-500'>
                <img className=' w-full' src={bg} alt="" />
                <div className='lekha text-white'>
                    <h1 className='text-2xl font-bold'>Create an Amazing Newspaper?</h1>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-error text-white'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default QZone;