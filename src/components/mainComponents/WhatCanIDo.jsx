import React from 'react'
import Project from '../specificComponents/Project'
import ProjectsData from '../../data/ProjectsData'
import MainProjects from '../specificComponents/MainProjects'

const MySkills = () => {
    return (
        <div className='min-h-[100vh] w-full flex flex-col justify-center items-start overflow-hidden mt-36'>
            <h1 className='w-full heading text-center xl:text-left'>what can i do .... </h1>
            <div className=''>
                <MainProjects />
            </div>
        </div>
    )
}

export default MySkills