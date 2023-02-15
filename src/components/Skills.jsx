import Image from 'next/image';
import React from 'react';
import Html from '../../public/assets/skills/html.png'
import Django from '../../public/assets/skills/django.png'
import Elasticsearch from '../../public/assets/skills/elasticsearch.png'
import FastAPI from '../../public/assets/skills/FastAPI_logo.png'
import JavaScript from '../../public/assets/skills/javascript.png'
import MongoDB from '../../public/assets/skills/mongo.png'
import NextJS from '../../public/assets/skills/nextjs.png'
import Python from '../../public/assets/skills/python.png'
import TailWindCss from '../../public/assets/skills/tailwind.png'
import Tornado from '../../public/assets/skills/tornado-web-server.png'

const Skills = () => {
    return (
        <div id='skills' className="w-full">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className='text-xl tracking-widest uppercase text-[#5d96c1] pl-2'>Skills</p>
                <h2 className='py-4 pl-2'> Technical Stacks</h2>
                <div className='grid md:gri-cols-2 lg:grid-cols-4 gap-12'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={Html}
                                alt='/'
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Html</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={TailWindCss}
                                alt=''
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwindcss</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={Python}
                                alt=''
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={NextJS}
                                alt=''
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>NEXTJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={FastAPI}
                                alt=''
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Fast API</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={Django}
                                alt=''
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Django</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={Elasticsearch}
                                alt=''
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Elasticsearch</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={MongoDB}
                                alt=''
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={Tornado}
                                alt=''
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tornado</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                src={JavaScript}
                                alt=''
                                height='55px'
                                width='55px'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;