import React from 'react'
import Project from '../specificComponents/Project'
import ProjectsData from '../../data/ProjectsData'
import MainProjects from '../specificComponents/MainProjects'

const MySkills = () => {
    return (
        <div className='w-full flex flex-col justify-center items-start overflow-hidden'>
            <h1 className='heading'>what can i do .... </h1>
            <div className=''>

                {/* company's website :netflix  , kasper , social media   */}
                <MainProjects />
                {/* Gaming website : gaming  , gamed*/}
                {/* portfolios  : my portfolios */}

            </div>
        </div>
    )
}

export default MySkills