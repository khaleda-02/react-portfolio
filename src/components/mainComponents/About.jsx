import React from 'react'
import me from '../../asseste/me noBorder.jpg'
const About = () => {
    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-center items-start overflow-hidden capitalize my-10 ' id="about">
            <h1 className='w-full heading text-center xl:text-left'>who i am <span> .... </span> </h1>
            <div className='flex justify-center items-center gap-10 flex-col lg:flex-row text-lg xl:items-center xl:justify-start '>
                <div className='w-[90%] mx-autl md:w-[70%] text-left md:text-center leading-8 xl:w-[50%] xl:text-left  xl:leading-8  text-slate '>
                    <p className='text-[18px] lg:text-[18px] my-6 w-[90%] mx-auto text-center lg:text-left' >

                        I'm a frontend web developer using <span className='sub-text'>react</span> and looking to be<span className='sub-text'>a MERN stack developer </span> , but still exploring other technologies and frameworks that catch my
                        interest! if you're looking for a developer to add to your team, I'd love to hear from you!
                    </p>
                    <p className='text-[20px] my-6 w-[90%] mx-auto hidden md:block'>
                        I started my coding journey almost  a 3 year ago and now I'm <span className='sub-text'>software developement student</span> and doing freelance projects on the
                        side for my friends. You may have noticed from my portfolio, but I'm obsessed with unique, interesting design and user-friendly
                        functionality so hit me up with your weird artistic project ideas or app proposals.
                    </p>
                </div>
                <div className=' w-[60%] md:w-[40%] lg:w-[30%] relative rounded-md group mx-auto '>
                    <img src={me} alt='me' className='w-full bg-cover my-img relative z-[5]' />
                    <div className='hidden lg:w-full h-full absolute left-0 top-0 z-[10]   group-hover:bg-green/40 duration-700 '></div>
                    <div className='hidden lg:w-full h-full absolute right-[-15px] bottom-[-15px] z-[0] border-solid border-2 border-green group-hover:right-0 group-hover:bottom-0 duration-700 '></div>
                </div>
            </div>
        </div>
    )
}

export default About