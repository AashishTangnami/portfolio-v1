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
                        Hi! Welcome  to my Portfolio
                    </p>
                    <h1> I'm <span className='text-[#252653]'> Aashish Tangnami </span></h1>
                    <h3>
                    Software Engineer | Data Scientist | Student 
                    </h3>
                    <h5> Soon to be :) </h5>
                    <p className='py-2 max-w-[70%] m-auto'>
                    I am currently a full-time AI and Data Science Graduate Student. I have undergrad Software engineering Degree.
                    I have about 2 years of professional work experience as Software Engineering with different technical stacks such as Python, JavaScript and Elasticsearch.
                    
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4 mt-12'>
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