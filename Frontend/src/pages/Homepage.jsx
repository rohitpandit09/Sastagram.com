import React from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

  const navigate = useNavigate();

  return (
    <div className='flex py-30'>
      <div className='bg-white h-100 w-120 flex flex-col px-10 rounded-sm gap-5 m-auto  '>

          <h1 className='text-[30px] font-bold item-center my-10'>Welcome to the Homepage</h1>
        
          <button className='border rounded-xl p-3 active:scale-95 my-10 w-fit mx-30' onClick={()=>{
            navigate('/create-post');
          }}>Click Here to start</button>

      </div>
    </div>
  )
}

export default Homepage;
