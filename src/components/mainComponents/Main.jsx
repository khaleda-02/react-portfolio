import React from 'react'

const Main = () => {
    return (
        <>
            <div className='hidden  w-full lg:flex min-h-[100vh] justify-start items-center overflow-hidden'>
                <div>

                    <p className='tag leading-6 text-green courier my-5 '> {"<MyInfo >"} </p>

                    {/* Name  */}
                    <p className='tag leading-6 text-green courier ml-12'> {"<MyName >"} </p>
                    <p className=' content my-4 text-white  leading-10 font-bold text-[28px]  courier ml-[6rem]' >khaled Ayman Elkhalili</p>
                    <p className='tag leading-6 text-green courier ml-12'> {"</MyName >"} </p>


                    {/*job description  */}
                    <p className='tag leading-6 text-green courier ml-12 mt-5'> {"<JobTitle >"} </p>
                    <p className=' content my-4 text-white  leading-10 font-bold text-[28px]  courier ml-[6rem]' >Frontend Developer</p>
                    <p className='tag leading-6 text-green courier ml-12'> {"</JobTitle >"} </p>


                    {/*Info  */}
                    <p className='tag leading-6 text-green courier ml-12 mt-5'> {"<Me >"} </p>
                    <p className='courier  w-[80%]   content my-4 text-white  leading-10 font-bold text-[22px] xl:text-[25px]  courier ml-[6rem] ' >
                        I'm a <span className='sub-text'>frontend</span> professional mainly and can handle any kind of frontend project. I love to solve complex and challenging issues and also love to learn new things each and every day:-)

                    </p>
                    <p className='tag leading-6 text-green courier ml-12'> {"</Me >"} </p>


                    {/*My Resume  */}
                    <div className='flex justify-start items-center mt-5 '>
                        <p className='tag leading-6 text-green courier ml-12'> {"<button >"} </p>
                        <a className=" content my-4 text-white  leading-10 font-bold text-[28px]  courier mx-4 hover:scale-105 duration-150  " target="_blank" href="../asseste/resume.pdf"> Download MyResume</a>
                        <p className='tag leading-6 text-green courier '> {"</button >"} </p>
                    </div>

                    <p className='tag leading-6 text-green courier my-5'> {"</MyInfo >"} </p>
                </div>
            </div>
            <div className='lg:hidden max-w-[90%] mx-auto min-h-[90vh] flex items-center justify-center '>
                <div className='text-green text-center capitalize'>
                    <h1 className='caveat  font-bold tracking-widest text-4xl md:text-5xl  '>khaled elkhalili</h1>
                    <h5 className='caveat  my-4 text-[1.3rem] md:text-3xl md:tracking-wider'>web creater : frontend developer ;</h5>
                    <p className='text-slate leading-6'>
                        I'm a front end professional mainly and can handle any kind of front-end project. I love to solve complex and challenging issues and also love to learn new things each and every day:-)
                    </p>
                </div>
            </div>
        </>
    )
}

export default Main