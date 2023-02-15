import React from 'react'
import Link from 'next/link'
import { AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';


const  Contact = () => {
    return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#709dff]'>
                Contact
            </p>
            <h2 className='py-2'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* Left  */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300'
                            src="/" alt='Network problem'/>
                        </div>
                        <div>
                            <h2 className='py-2'> Name Here</h2>
                            <p> Full Stack Software Engineer | Data Scientist</p>
                            <p className='py-4'> I am available for freelance or full-time positions. Contact me and let's talk.</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connect with Me </p>
                        <div className='flex items-center justify-between py-4'>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiFillLinkedin/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineGithub/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <CiMail/>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <IoMdContact/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>                    
                </div>
                {/* Right  */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        {/* Contact Form */}
                        <form>
                            <div className='grid md:grid gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />

                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300' type='email' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' />
                            </div>
                        <button className='w-full p-4 text-gray-100 mt-4'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#709dff]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
    );
}
export default Contact;