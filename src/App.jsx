import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import Create from './components/Create'


function App() {
  return (
    <div className='h-screen w-screen flex '>
      <Link to="/" className='text-white-300 absolute left-[17%] top-[4%] px-3 py-2 bg-red-300 rounded-lg'>HOME</Link>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/create' element={<Create/>} />
      </Routes>
      


    </div>
  )
}

export default App