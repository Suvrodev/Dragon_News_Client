import React, { useEffect, useState } from 'react';
import './NewsDetail.css'
import { useNavigate, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import EditorsInside from '../../EditorsInside/EditorsInside';

const NewsDetail = () => {

    const navigate=useNavigate()
    const {id}=useParams()
    console.log("Checkkkkkkkkkkkkkkkkk: ",id);

    const [news,setNews]=useState("")
    useEffect(()=>{
        fetch(`https://news-dragon-server-inpqy58dk-suvrodev.vercel.app/news/${id}`)
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])

    console.log("kuchupu: ",news);


    const backToHome=(category_id)=>{
        console.log("Go Home: ",category_id);
        navigate(`/categories/${category_id}`)
    }

    const {category_id,image_url,details,title}=news

    return (
        <div>
            <div className='m-5'>
                <img src={image_url} alt="" />
                <h1 className='text-xl font-bold my-2'>{title}</h1>
                <p> {details} </p>
                <button onClick={()=>backToHome(category_id)} className='flex items-center gap-2 bg-red-500 text-white p-3 mt-4'> <FaLongArrowAltLeft/> All news in this Category </button>
          </div>

          <EditorsInside></EditorsInside>
        </div>
    );
};

export default NewsDetail;