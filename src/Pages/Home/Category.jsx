import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsLayout from './NewsLayout';

const Category = () => {

    let {id}=useParams()

    if(!id){
        id=0
    }

    const [news,setNews]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/categories/${id}`)
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[id])
    // console.log("Total News: ",news);

    return (
        <div>
            {/* <h1>Category: {id} </h1> */}
            <div>
                {
                    news.map(nws=><NewsLayout
                    key={nws._id}
                    nws={nws}
                    ></NewsLayout>)
                }
            </div>
        </div>
    );
};

export default Category;