import React from 'react';
import Link from 'next/link';
import { AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai';
// import { IoMdContact } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';


const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Hi! Welcome  to my Digital Portfolio
                    </p>
                    <h1> I'm <span className='text-[#5d96c1]'> Aashish Tangnami </span></h1>
                    <h1>
                    Full-Stack Data Scientist
                    </h1>
                    <h5> Soon to be :) </h5>
                    <p className='py-2 max-w-[70%] m-auto'>
                    I am currently a full-time AI and Data Science Graduate Student in Loyalist College.
                    I have a passion for technology and have been developing my skills in Artificial Intelligence and Data Science. 
                    With an interest in AI, I started learning and building my fundamentals in Python, Numpy, Pandas and other technologies. 
                    I am still sharpening my skills through many courses, outside of my academic syllabus which I would be completing along side my Graduate Degree.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300'>
                            <Link href='https://www.linkedin.com/in/aashishtangnami/'>
                                <AiFillLinkedin/>
                            </Link>  
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300'>
                            <Link href="https://github.com/AashishTangnami"> 
                                <AiOutlineGithub/>
                            </Link>  
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300'>
                            <Link href="mailto:tangnamiaashish1423@gmail.com"> 
                                <CiMail/>
                            </Link>  
                        </div>
                        {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300'>
                            <IoMdContact/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Main