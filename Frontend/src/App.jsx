import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CreatePost from './pages/CreatePost' 
import ViewPost from './pages/ViewPost'

const App = () => {
  return (
    <div className='bg-violet-500 h-screen w-screen'>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/view-post' element={<ViewPost/>} />
      </Routes>
    </div>
  )
}

export default App;
