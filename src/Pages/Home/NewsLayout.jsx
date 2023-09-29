import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StarRatingInput } from 'react-star-rating-input';
import '@smastrom/react-rating/style.css'

const NewsLayout = ({nws}) => {

    const {_id,author,details,image_url,rating,title,total_view}=nws
    const {img,name,published_date}=author
    const {number}=rating;
    // console.log(nws);
    return (
        <div className='newsContainer border w-[95%] mx-auto p-3 '>
            <div className="Author flex">
               <div className="authorLeft flex w-[85%] gap-2">
               <img className='w-[40px] rounded-[50%]' src={img} alt="" />
                <div className="nameAndDate flex flex-col">
                    <p>{name} </p>
                    <p>{published_date}</p>
                </div>
               </div>

               <div className='icon flex items-center justify-center gap-2'>
                <FaRegBookmark/>
                <FaShareAlt/>
               </div>
            </div>
            <h1 className='my-2 text-lg font-bold'>{title}</h1>
            <div className="image">
              <img className='' src={image_url} alt="" />
            </div>
            <p className='mt-2'> {details.length<250? <>{details}</>: <>{details.slice(0,250)}.....</> } </p>
            <p className='font-bold text-orange-500'> <Link to={`/detail/${_id}`}>Read More</Link></p>
            <p className='border'></p>
            <div className="users flex justify-between items-center">
                <div className="ratting flex gap-2 ">

                <Rating
                  style={{ maxWidth: 80 }}
                   value={number}
                   readOnly
                />
                    {number}
                </div>
                <div>
                    <FaEye/>
                </div>
            </div>
        </div>
    );
};

export default NewsLayout;