import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
    const [caption, setCaption] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();


        const formData = new FormData(e.target);
        
        axios.post("http://localhost:3000/create-post",formData).then((res)=>{
            console.log(res.data);
        })

        navigate('/view-post');

        

    }

  return (
    <>
    <Navbar/>
    <div className='px-140 py-50'>
      
        <form className='flex flex-col bg-white h-60 w-100  rounded-lg gap-5 py-10' onSubmit={handleSubmit}>
            <input type="file" name="image" id="image*/" className='border text-gray-800 px-1 w-80 mx-9' />

            <input type="text" name="caption" id="caption" placeholder='Caption' className='border bg-gray-300 px-1 w-80 mx-9'  onChange={(e)=>{
                setCaption(e.target.value);
            }}/>

            <button className='border rounded-xl p-3 active:scale-95 my-10 w-40 mx-28 bg-green-400 text-white font-bold' onClick={()=>{
                setCaption('');
            }}>Create Post</button>
        </form>
    </div>

    </>
  )
}

export default CreatePost
