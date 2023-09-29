import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ActiveRoute from '../../ActiveRoute/ActiveRoute';

const Title = ({category,handleCategory}) => {
    const {id,name}= category;
   
    return (
        <div className=''>
           {/* <h1 onClick={()=>handleCategory(id)} className='text-xl mt-2 ms-10 cursor-pointer ' > {name} </h1> */}
           {/* <NavLink to={`categories/${id}`} className='text-xl mt-2 ms-10 cursor-pointer'> {name} </NavLink> */}
           <ActiveRoute to={`categories/${id}`} className='text-xl mt-2 ms-10 cursor-pointer'> {name} </ActiveRoute>
        </div>
    );
};

export default Title;