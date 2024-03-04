import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const HomePage = () => {
  return (
    <div>
        <div className='flex text-2xl px-24 pt-24 pb-2 justify-between' >
            <div className='mt-22 '>
               <div  className=' flex flex-col gap-3 text-3xl'>
               <h1 className='font-semibold'>School Management System<span> Dashboard UI Elements</span></h1>
                <h3>Welcome to Student Page</h3>
                <h3>Welcome to Student Page</h3>
                <div className='mt-8'>
                <button className='transition duration-300 ease-in-out bg-red-500 text-white  py-1  px-8 rounded-3xl flex items-center pl-4'>Learn More <spam className="pl-2"><FaArrowAltCircleRight /></spam></button>
                </div>
               </div>
               
            </div>
           <div >
            <img src='/student.jpg' alt='img' className='w-[600px]'/>
           </div>
        </div>
    </div>
  )
}

export default HomePage