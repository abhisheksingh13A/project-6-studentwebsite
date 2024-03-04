import React from 'react'

import { FcManager } from "react-icons/fc";
import { FaSearch,FaFacebookMessenger } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='border-b-4 drop-shadow-xl'>
        <div className='flex items-center justify-around gap-5 my-6 ' >
            <div>
                <h1 className='text-2xl font-semibold'>
                    <span className='text-orange-400'>Student</span> Management System
                </h1>
            </div>
            <div className='flex items-center '>
                <input type='text' placeholder='Search' className=' focus:outline-none rounded-l-2xl bg-slate-200 py-2 px-4'/>
                <span className='rounded-r-2xl bg-slate-200 p-3'><FaSearch /></span>
            </div>
            <div>
                <nav className='flex flex-row gap-4 text-xl '>
                    <a href='/' className='hover:text-red-500'>Home</a>
                    <a href='/about' >About</a>
                    <a href='/course' >Course</a>
                    <a href='/student' >Student</a>
                    <a href='/faculty' >Faculty</a>
                </nav>
            </div>
            <div className='flex gap-4 text-3xl'>
                <span><IoNotifications /></span>
                <span><FaFacebookMessenger /></span>
                <span className='rounded-full bg-blue-300'><FcManager /></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar