import Image from 'next/image';
import React from "react";

const Skills = () => {
    return (
        <div id='skills' className="w-full h-20 p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className='text-xl tracking-widest uppercase text-[#5d96c1'>Skills</p>
                <h2 className='py-4'>What can i do</h2>
                <div className='grid md:gri-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Html</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwindcss</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NEXTJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Fast API</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Django</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Elasticsearch</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image/>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;