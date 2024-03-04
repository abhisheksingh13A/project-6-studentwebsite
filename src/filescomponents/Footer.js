import React from 'react'
import { IoCall } from "react-icons/io5";
import { FaFacebook,FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='bg-black text-white px-10 py-5 mt-5'>
        <div className='flex flex-row justify-around my-10 '>
            <div >
                <IoCall className='rounded-full bg-blue-500 text-6xl text-right p-1 mb-2'/>
                <div>(+91) 63929238430</div>
            </div>
            <div>
                <AiFillMessage className='rounded-full bg-blue-500 text-6xl text-center p-1 mb-2'/>
                <div>School123@gmail.com</div>
            </div>
            <div>
               <FaLocationDot  className='rounded-full bg-blue-500 text-6xl text-center p-1 mb-2'/>
                <div>302,IT Park New Mumbai</div>
            </div>
        </div>
        <div className='flex flex-row gap-10 justify-center text-xl p-5 border-b-4'>
            <div>
                <h1>About</h1>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
            </div>
            <div>
                <h1>About</h1>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
            </div>
            <div>
                <h1>About</h1>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
            </div>
            <div>
                <h1>About</h1>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
                <h3>Our Team</h3>
            </div>
            <div className='flex flex-col ml-10 gap-8'>
                <div>
                <h1 className='text-2xl font-semibold'>Subscribe :)</h1>
                <input type='text' placeholder='Email.com' className='rounded-2xl focus:outline-none bg-slate-300 mt-3 p-2'/>
                </div>
                <h3>Get More information about ..</h3>
            </div>
        </div>
        <div>
           <div className='flex flex-row gap-5 text-3xl p-7 justify-center'>
           <FaFacebook />
           <FaInstagram />
           <FaLinkedin />
           <FaWhatsapp />
           <FaTwitter />

           </div>
<div className='text-center'>
    <h1 className='text-gray-300'>@2024 Student Compony Private Ltd. All Rights Reserved</h1>
</div>
        </div>
    </div>
  )
}

export default Footer