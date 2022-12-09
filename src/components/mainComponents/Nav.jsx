import React, { useState } from 'react'
import { TbArrowsLeft, TbArrowsRight } from 'react-icons/tb'

//TODO: Improvements : 
//TODO: make the (logo && toggle button ) one insdated of two divs and make the animation just for the links 
//?Done 

//TODO:animate the toggle button ( search on youtube )

const Nav = ({ toggle }) => {
    const [menuVisability, setMenuVisability] = useState(false)
    return (
        <div className={` ${menuVisability ? "bg-light-navy " : "bg-navy "} `}>
            {/* constant and main navbar*/}
            <div className='w-[90%] mx-auto h-[10vh] flex justify-between items-center'>
                <button className='text-green text-2xl font-bold capitalize courier' >khaled</button>
                <button className='text-green text-2xl font-bold capitalize courier' onClick={() => {
                    toggle(pre=>!pre)
                    setMenuVisability(pre=>!pre)
                }}  >{menuVisability ? <TbArrowsRight className='text-green font-bold ' size={30}/>  : <TbArrowsLeft className='text-green font-bold ' size={30}/>  }</button>
            </div>
            {/* movable navBar (Menu) */}
            <div className={`w-full h-[90vh] ${menuVisability ? " top-[10vh] " : " top-[-100%] "} bg-light-navy absolute  w-full h-full left-0  flex items-center justify-center duration-[0.4s] z-20  `}>
                <div className={`flex flex-col justify-center items-center  gap-10  `}>
                    <h1 className='text-center text-sm font-light text-green uppercase p-0 m-0'>- Menu -</h1>
                    <a href='#df' alt='link' className='text-7xl text-green font-extrabold  hover:tracking-widest duration-300 capitalize'>about</a>
                    <a href='#df' alt='link' className='text-7xl text-green font-extrabold  hover:tracking-widest duration-300 capitalize'>Experience</a>
                    <a href='#df' alt='link' className='text-7xl text-green font-extrabold  hover:tracking-widest duration-300 capitalize'>work</a>
                    <a href='#df' alt='link' className='text-7xl text-green font-extrabold  hover:tracking-widest duration-300 capitalize'>Skills</a>
                    <a href='#df' alt='link' className='text-7xl text-green font-extrabold  hover:tracking-widest duration-300 capitalize'>contact </a>
                </div>
            </div>
        </div>
    )
}


export default Nav

