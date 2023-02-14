import React from 'react'
import Image from 'next/image'
// import AboutImg from '../public/assets/about.jpg';

function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='cols-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5d96c1]'>About</p>
                <p className='py-4 text-gray-600'>Who am I</p>
                <p className='py-2 text-gray-600'>I am 2 years experienced software engineer who is currently pursuing AI and Data Science. 
                    A journey to be Full-Stack Data Scientist.
                </p>
                <p className='py-2 text-gray-600'>I love exploring things out. 
                   Although I am almost a Data Scientist, I struggle with ML Models, Algorithms, Data Structure, Maths and list goes on
                Thus, to retain and build my skills I like to engage myself writing blogs. 
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out my blogs and projects  
                </p> 
                
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            {/* <Image src={AboutImg} className='rounded-xl' alt='oh shett!' />  */}
            </div>
        </div>
    </div>
  )
}

export default About