import React from 'react'
import ProjectsData from '../../data/ProjectsData'
import Project from './Project'
function MainProjects() {
    return (
        <>
            {ProjectsData.map(element => {
                return (
                    <div className='py-10' >
                        <h1 className='text-5xl text-yellow-400 capitalize mb-2 cairo px-3 '>{element.title} :   </h1>
                        <div className='flex justify-between items-center gap-4 flex-wrap'>
                            {
                                
                            }
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default MainProjects


// element.projects.map(pro => {
//     return (
//         <>
//             {/* {pro.preferd &&
//                 <Project.PreferdProject id={pro.id} title={pro.title} imgScr={pro.img} link={pro.link} github={pro.github} data={pro.data} skills={pro.skills} preferd={pro.preferd} />
//             } */}
//         </>
//     )
// })