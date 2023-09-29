import React, { useEffect, useState } from 'react';
import Title from './Title';

import img1 from '../../../assets/1.png'
import img2 from '../../../assets/2.png'
import img3 from '../../../assets/3.png'
import { FaCalendarDay } from 'react-icons/fa6';

const LeftNav = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    // console.log("Categories: ",categories);

    const handleCategory=(id)=>{
        console.log("Id: ",id);
    }

    return (
        <div className='sticky top-1'>
            <h1 className='text-xl font-bold mb-1'>All Categories</h1>
           <div className='grid grid-cols-1 gap-4 '>
              {
               categories.map(category=><Title
               category={category}
               key={category.id}
               handleCategory={handleCategory}
               ></Title>  ) 
              }
           </div>

           <div>


            {/* Image Start */}
           <div className="grid grid-cols-1 gap-4  p-4">
        <div className="card card-compact bg-white shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex gap-2 items-center">
               <p className='font-bold'>Sports</p>  
                <FaCalendarDay/>
                <p>Jan 4, 2022</p>
            </div>
           
          </div>
        </div>
        <div className="card card-compact bg-white shadow-xl">
          <figure>
            <img
              src={img2}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
          <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex gap-2 items-center">
              <p className='font-bold'>Sports</p>  
                <FaCalendarDay/>
                <p>Jan 4, 2022</p>
            </div>
           
          </div>
        </div>
        <div className="card card-compact bg-white shadow-xl">
          <figure>
            <img
              src={img3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
          <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
            <div className="flex gap-2 items-center">
                  <p className='font-bold'>Sports</p>   
                <FaCalendarDay/>
                <p>Jan 4, 2022</p>
            </div>
           
          </div>
        </div>
      </div>
           </div>
        </div>
    );
};

export default LeftNav;