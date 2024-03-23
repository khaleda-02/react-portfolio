import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
function Contact() {
    return (
        <div className='w-full my-32' id="contact">
            <h3 className='capitalize font-semibold text-center text-lg text-green'> need a fullstack developer</h3>
            <div className='group my-10 flex justify-center items-center md:gap-3 hover:border-b-4  hover:border-green  hover:border-solid w-fit mx-auto py-4 px-3 duration-500'>
                <a className='capitalize text-slate font-bold text-[1.25rem] md:text-2xl  sm:font-extrabold sm:text-5xl  text-center p-0 m-0  ' href='mailto:khaleda.02f@gmail.com' rel="noreferrer" target='_blank'>Let’s work together </a>
                <AiOutlineArrowRight className='text-slate group-hover:text-green duration-500 pt-2x m-0 text-[1.5rem] md:text-5xl pt-2' />
            </div>
        </div>
    )
}
export default Contact