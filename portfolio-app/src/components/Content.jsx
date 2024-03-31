import React, { useState } from 'react'
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { RiGoogleFill } from "react-icons/ri";
import Harsh from '../Assests/img/Harsh.JPG'

const Content = () => {
    const [IsHovered, setIsHovered] = useState(false)
    return (
        <div className='bg-[#282828] text-white h-screen py-[5%]'>
            <div className='text-center items-center'>
                <h1 className='text-[#41e6ff] font-extrabold text-5xl'>Harsh Shah</h1>
                <h2 className='text-[20px]'>Front-End Developer</h2>
                <p>Skilled front-end developer with expertise
                    <br />in Tailwind CSS, React, HTML, CSS, and JavaScript, and a strong foundation in Bootstrap.
                    <br /> Proficient in creating responsive user interfaces and collaborating effectively
                    <br /> with cross-functional teams to deliver exceptional web applications.
                </p>
            </div>
            <div className='flex text-[#41e6ff] justify-center items-center gap-10 text-4xl py-4'>
                <AiFillYoutube className='hover:text-[red]' />
                <AiFillInstagram className='hover:text-white' />
                <AiFillLinkedin className='hover:text-[#46419e]' />
                <AiFillGithub className='hover:text-black' />
                <div onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    {
                        IsHovered ? (<FcGoogle />) :
                            (<RiGoogleFill />)
                    }
                </div>
            </div>
            <br />
            <div className='flex justify-center'>
                <img src={Harsh} alt="Harsh'sProfilephoto" className='w-45 h-80 rounded-[100px]' />
            </div>
        </div>
    )
}
export default Content;