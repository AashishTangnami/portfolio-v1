import React from 'react'
import Image from 'next/image'
import TheJokerImg from '../../public/assets/projects/thejoker.jpg'
import AmritGrgImg from '../../public/assets/projects/Legend.jpg'
import MahaJodiImg from '../../public/assets/projects/mahajodi.jpg'
import EyeGodImg from '../../public/assets/projects/drsanduksir.jpg'
import TAI from '../../public/assets/projects/tai.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e]'>
                    Projects
                </p>
                <h2 className='py-4'>What I do When I am Free.</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Terakoya Academia'
                        backgroundImg={TAI}
                        projectUrl='/Tai'
                        tech='ReactJS | Python | Django | SQL'

                    />
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10' src={MahaJodiImg} alt='/' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'> Maha Jodi</h3>
                                <p className='pb-4 pt-2 text-white text-center'> They are the legendary and pioneers of Nepalese film industries</p> 
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10' src={TheJokerImg} alt='/' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'> The Joker </h3>
                                <p className='pb-4 pt-2 text-white text-center'> Oscar award winner Headth Ledger is the legendary Joker character</p> 
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10' src={AmritGrgImg} alt='/' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'> The Nepathya</h3>
                                <p className='pb-4 pt-2 text-white text-center'> He is the legendary singer of Nepal.</p> 
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10' src={EyeGodImg} alt='/' />
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'> The god of Eye </h3>
                                <p className='pb-4 pt-2 text-white text-center'> Dr Mr Sanduk Ruit is the god of eyes.</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects;