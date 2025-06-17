import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from './DetailsCard';

const Details = () => {
    const userData = useLoaderData();
    const {id}= useParams();
    const [post,setPost]= useState({});


    useEffect(()=>{
        const postDetails =userData.find((singlePost)=>singlePost._id ==id);
        setPost(postDetails)
    },[userData,id])
    return (
 <div>
    
        <DetailsCard post={post}></DetailsCard>
    
 </div>
    );
};

export default Details;