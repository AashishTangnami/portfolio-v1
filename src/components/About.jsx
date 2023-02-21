import React from 'react'
import Image from 'next/image'
import AboutImg from '../../public/assets/about.jpg'

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='cols-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5d96c1]'>About Me</p>
                <p className='py-2 text-gray-800'>Who is he?</p>
                <p className='py-2 text-gray-600'>Aashish Tangnami is a software engineer with two years of experience, 
                He is currently pursuing a career as a Full-Stack Data Scientist.
                </p>
                <p className='py-2 text-gray-600'> He has a deep passion for exploration, 
                and he is always looking for ways to develop his skills in various areas of AI.
                He loves to exchange and share his insights and knowledge with others.
                </p>
                <p className='py-2 text-gray-600'>He believes that the process of writing and explaining complex ideas to a wider audience not only helps me to learn more, 
                but also benefits the community. <br></br>
                He is committed to my journey of becoming a Full-Stack Data Scientist and continue to seek opportunities to learn and grow my skills
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                Blogs coming soon! 
                </p> 
                
            </div>
            <div className='m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} className='rounded-xl' alt='oh shett!'/> 
            </div>
        </div>
    </div>
  )
}

export default About