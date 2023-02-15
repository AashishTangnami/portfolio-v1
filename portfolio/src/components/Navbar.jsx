import Image from 'next/image';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { AiOutlineClose, AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai';
import { TiThMenuOutline} from 'react-icons/ti';
import { IoMdContact } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';
import { useRouter } from 'next/router';

const Navbar = () => {
    // Adding click events.
    const [nav, setNav] = useState(false) // initial value is false.

    // Handle shadow effects
    const [shadow, setShadow] = useState(false)

    // set nav bar background color for projects.
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    
    const router = useRouter()
    useEffect (()=>{
        if(router.asPath === '/Joker' || 
        router.asPath === '/Legend'
        ){
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        }else{
            setNavBg('ecf0f3')
            setLinkColor('#1f2937')
        }

    },[router])
    const handleNav = () => {
        // Hide Mobile view navigation. 
        // Controls toggling the menu.
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true);
            } else {
                setNav(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, [])
    return (
        <div 
        style = {{backgroundColor:`${navBg}`}}
        className={ shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image 
                src='/../public/assets/navLogo.jpg' 
                alt='my-pic'
                width='125' 
                height='50'
                />
            <div>
                <ul style={{ color: `${linkColor}` }}
                className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                {/* onClick event that changes the state of the button/icon */}
                <div onClick={handleNav} className='md:hidden'>
                    <TiThMenuOutline size={25} />
                </div>
            </div>
            </div>
        {/* change the state of menu as hamburger icon */}
        {/* nav is true, changes the styling of the nav */}
        <div className = { nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
            <div className = { 
                nav 
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image
                           src='/../public/assets/navLogo.jpg' 
                           alt='my-pic'
                           width='125' 
                           height='50'
                        />
                        {/* onClick event that changes the state of nav's condition to true */}
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'> Let's Solve Real Life Problem</p>
                    </div>
                </div>
                {/* Hamburger icon nav */}
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'> 
                            <li onClick={ ()=> setNav(false)} className='py-4 text-sm'> Home </li>
                        </Link>
                        <Link href='/#about'>
                            <li onClick={ ()=> setNav(false)} className='py-4 text-sm'> About </li>
                        </Link>
                        <Link href='/#skills'>
                            <li onClick={ ()=> setNav(false)} className='py-4 text-sm'> Skills </li>
                        </Link>
                        <Link href='/#projects'>
                            <li onClick={ ()=> setNav(false)} className='py-4 text-sm'> Projects </li>
                        </Link>
                        <Link href='/#contact'>
                            <li onClick={ ()=> setNav(false)}  className='py-4 text-sm'> Contact </li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'> Let's Connect
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiFillLinkedin/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineGithub/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <CiMail/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <IoMdContact/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    );
}
export default Navbar;
                