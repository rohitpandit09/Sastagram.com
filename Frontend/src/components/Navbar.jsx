import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-screen h-15 bg-white flex justify-around'>

        <button onClick={()=>{
            navigate('/');
        }}>
            Home
        </button>

        <button onClick={()=>{
            navigate('/create-post');

        }}>
            Create Posts
        </button>

        <button onClick={()=>{
            navigate('/view-post');
        }}>
            View Posts
        </button>

      
    </div>
  )
}

export default Navbar
