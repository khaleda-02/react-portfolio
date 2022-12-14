import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
function Contact() {
    return (
        <div className='w-full my-32'>
            <h3 className='capitalize text-green+ font-semibold text-center text-3xlg'> need a frontend developer</h3>
            <div className='group my-10 flex justify-center items-center gap-3 hover:border-b-4  hover:border-green  hover:border-solid w-fit mx-auto py-4 px-3 duration-500'>
                <a className='capitalize text-slate font-extrabold text-center text-5xl p-0 m-0  ' href='mailto:khaleda.02f@gmail.com' rel="noreferrer"  target='_blank'>Let’s work together </a>
                <AiOutlineArrowRight  size={50} className='text-slate group-hover:text-green duration-500 pt-2x m-0'/>
            </div>
        </div>
    )
}
// How about chatting with me
export default Contact