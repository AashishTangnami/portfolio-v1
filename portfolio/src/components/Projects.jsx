import React from 'react'
import TheJokerImg from '../../public/assets/projects/thejoker.jpg'
import AmritGrgImg from '../../public/assets/projects/Legend.jpg'
import MahaJodiImg from '../../public/assets/projects/mahajodi.jpg'
import EyeGodImg from '../../public/assets/projects/drsanduksir.jpg'
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
                        title='The Joker'
                        backgroundImg={TheJokerImg}
                        projectUrl='/Joker'
                        tech='Pencil and Paper LoL'
                    />
                    <ProjectItem
                        title='The Singer Amrit Grg'
                        backgroundImg={AmritGrgImg}
                        projectUrl='/singer'
                        tech='Music'

                    />
                    <ProjectItem
                        title='Maha Jodi'
                        backgroundImg={MahaJodiImg}
                        projectUrl='/MahaJodi'
                        tech='Entertainment'

                    />
                    <ProjectItem
                        title='The Eye God Dr Sanduk'
                        backgroundImg={EyeGodImg}
                        projectUrl='/eyegod'
                        tech='Medical'

                    />
                    </div>
                </div>
            </div>
    );
}
export default Projects;