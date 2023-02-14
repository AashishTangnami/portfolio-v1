import React from 'react';
import { AiOutlineClose, AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';


const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        Hi! Welcome  to my digital world
                    </p>
                    <h1> I'm <span className='text-[#5d96c1]'> Aashish Tangnami </span></h1>
                    <h1>
                    Full-Stack Data Scientist
                    </h1>
                    <h5> Soon to be :) </h5>
                    <p className='py-4 max-w-[70%] m-auto'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime, obcaecati. Ipsum sed laborum dolorem, eum tenetur est iusto aperiam incidunt dolore soluta provident. 
                        Debitis minus fuga nemo harum nulla enim.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300'>
                            <AiFillLinkedin/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300'>
                            <AiOutlineGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300'>
                            <CiMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300'>
                            <IoMdContact/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Main