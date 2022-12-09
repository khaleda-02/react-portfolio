// import React from 'react'

// const Main = () => {
//     return (
//         <div className='w-full h-[90vh] flex justify-start items-center'>
//             <div>
//                 <p className='tag leading-6 text-green courier my-3 '> {"<MyInfo >"} </p>
//                 <div className='flex justify-start items-center   '>
//                     <p className='tag leading-6 text-green courier ml-4'> {"<MyName >"} </p>
//                     <p className='text-slate  leading-10 font-bold text-[20px]  courier mx-2 ' >khaled Ayman Elkhalili</p>
//                     <p className='tag leading-6 text-green courier '> {"</MyName >"} </p>
//                 </div>
//                 <div className='flex justify-start items-center mt-3  '>
//                     <p className='tag leading-6 text-green courier ml-4'> {"<JobDescription >"} </p>
//                     <p className='text-slate  leading-10 font-bold text-[20px]  courier mx-2 ' >Frontend Developer</p>
//                     <p className='tag leading-6 text-green courier '> {"</JobDescription >"} </p>
//                 </div>
//                 <div className='flex flex-col justify-center items-start  mt-3 '>
//                     <p className='tag leading-6 text-green courier ml-4'> {"<Me >"} </p>
//                     <p className='text-slate  leading-10 font-bold text-[20px]  courier ml-8 w-[80%] ' >
//                         I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
//                         Currently,
//                         I’m focused on building accessible, human-centered products at Upstatement.
//                     </p>
//                     <p className='tag leading-6 text-green courier ml-4'> {"</Me >"} </p>
//                 </div>
//                 <div className='flex justify-start items-center mt-3  '>
//                     <p className='tag leading-6 text-green courier ml-4'> {"<button >"} </p>
//                     <a className="text-slate  leading-10 font-bold text-[20px]  courier mx-2 " target="_blank" href="../asseste/resume.pdf"> Download MyResume</a>
//                     <p className='tag leading-6 text-green courier '> {"</button >"} </p>
//                 </div>

//                 <p className='tag leading-6 text-green courier my-3'> {"</MyInfo >"} </p>
//             </div>
//         </div>
//     )
// }

// export default Main



import React from 'react'

const Main = () => {



    return (
        <div className='w-full h-[90vh] flex justify-start items-center overflow-hidden'>
            <div>

                <p className='tag leading-6 text-green courier my-5 '> {"<MyInfo >"} </p>

                {/* Name  */}
                <p className='tag leading-6 text-green courier ml-12'> {"<MyName >"} </p>
                <p className=' content my-4 text-slate  leading-10 font-bold text-[28px]  courier ml-[6rem]' >khaled Ayman Elkhalili</p>
                <p className='tag leading-6 text-green courier ml-12'> {"</MyName >"} </p>


                {/*job description  */}
                <p className='tag leading-6 text-green courier ml-12 mt-5'> {"<JobTitle >"} </p>
                <p className=' content my-4 text-slate  leading-10 font-bold text-[28px]  courier ml-[6rem]' >Frontend Developer</p>
                <p className='tag leading-6 text-green courier ml-12'> {"</JobTitle >"} </p>


                {/*Info  */}
                <p className='tag leading-6 text-green courier ml-12 mt-5'> {"<Me >"} </p>
                <p className='courier  w-[80%]   content my-4 text-slate  leading-10 font-bold text-[25px]  courier ml-[6rem] ' >
                    I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently,
                    I’m focused on building accessible, human-centered products at Upstatement.
                </p>
                <p className='tag leading-6 text-green courier ml-12'> {"</Me >"} </p>


                {/*My Resume  */}
                <div className='flex justify-start items-center mt-5 '>
                    <p className='tag leading-6 text-green courier ml-12'> {"<button >"} </p>
                    <a className=" content my-4 text-slate  leading-10 font-bold text-[28px]  courier mx-4 hover:scale-105 duration-150  " target="_blank" href="../asseste/resume.pdf"> Download MyResume</a>
                    <p className='tag leading-6 text-green courier '> {"</button >"} </p>
                </div>

                <p className='tag leading-6 text-green courier my-5'> {"</MyInfo >"} </p>
            </div>
        </div>
    )
}

export default Main