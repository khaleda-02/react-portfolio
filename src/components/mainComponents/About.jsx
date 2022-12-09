import React from 'react'
import img from '../../asseste/heigh quality.jpg'
const About = () => {
    return (
        <div className='w-full h-[90vh] flex flex-col justify-center items-start overflow-hidden'>
            <h1 className='heading'>who am i ... </h1>
            <div className='flex justify-start items-start gap-10 text-lg   '>
                <div className='w-[50%] text-slate  leading-8'>
                    <p className='text-[25px] mb-6 w-[90%]' >
                        Hello! My name is Brittany and I enjoy creating things that live on the internet.
                        My interest in web development started back in 2012 when I decided to try editing custom
                        Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p className='text-[25px] my-6 w-[90%]'>
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency,
                        a start-up, a huge corporation, and a student-led design studio. My main focus these days is building
                        accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>
                    <p className='text-[25px] my-6 w-[90%]'>
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API
                        using Node & React.
                    </p>
                    {/* <p className='text-[20px] my-6 w-[90%]'>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <div className='flex flex-wrap items-start justify-start gap-6 '>
                        <h3 className='skills'> .  javaScript (ES6+)</h3>
                        <h3 className='skills'> .  React.js</h3>
                        <h3 className='skills'> .  TailwindCss</h3>
                        <h3 className='skills'> .  Bootstrap </h3>
                        <h3 className='skills'> .  MUI 5 </h3>
                        <h3 className='skills'> .  GitHub</h3>
                    </div> */}
                </div>
                <div className='w-[30%] relative rounded-md group '>
                    <img src={img} alt='me' className='w-full bg-cover my-img relative z-[5]' />
                    <div className='w-full h-full absolute left-0 top-0 z-[10]   group-hover:bg-green/40 duration-700 '></div>
                    <div className='w-full h-full absolute right-[-15px] bottom-[-15px] z-[0] border-solid border-2 border-green group-hover:right-0 group-hover:bottom-0 duration-700 '></div>
                </div>
            </div>
        </div>
    )
}

export default About