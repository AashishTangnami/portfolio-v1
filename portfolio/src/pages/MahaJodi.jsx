import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MahaJodiImg from '../../public/assets/projects/mahajodi.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'

const MahaJodi = () => {
    return (
        <div className='w-full'>
            {/* Create Project as background*/}
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
                    <Image className='absolute z-1' layout='fill' objectFit='cover'
                        src={MahaJodiImg}
                        alt='/'
                    />
                    <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10'>
                        <h2 className='py-2'>
                            The Legends Maha Jodi
                        </h2>
                        <h3>NEXT JS / Tailwind / FastAPI / Python</h3>
                    </div>
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p> Project </p>
                    <h2> Overview </h2>
                    <p>
                        This project was build to develop my personal skills. 
                        The confidence of being myself and exploring the artist in me.
                    </p>
                    <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    <button className='px-8 py-2 mt-4 mr-8'> Code
                    </button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>
                                NEXTJS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>
                                PYTHON
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>
                                FASTAPI
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>
                                DJANGO
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1'/>
                                TAILWIND
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'> Back
                </Link>    
            </div>
        </div>
    )
}
export default MahaJodi