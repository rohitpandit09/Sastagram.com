import React, { useState , useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';


const ViewPost = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
            .then((res) => {
                console.log(res.data);
                setPosts(res.data.posts);
            })
            
    },[])

    return (
        <div className='flex flex-col gap-10'>
        <Navbar/>
        <div className='flex flex-wrap justify-center px-10 h-fit w-screen overflow-x-none gap-10 '>
            {posts.map((post)=>{{
                return (
                    <div key={post._id} className='h-100 w-1/2 bg-white rounded-lg flex flex-col p-3 gap-2 justify-center '>
                        <img src={post.image} alt={post.caption} className='object-cover h-80 w-screen border-gray-300 rounded-lg'/>
                        <p className='text-[20px] text-black'>
                            {post.caption}

                        </p>
                    </div>
                )
            }})}
        </div>
        </div>
    )
}

export default ViewPost;
