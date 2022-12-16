import React from 'react'
import MainProjects from '../specificComponents/MainProjects'

const MySkills = () => {
    return (
        <div id="work" className='min-h-[100vh] w-full flex flex-col justify-center items-start overflow-hidden mt-36'>
            <h1 className='w-full heading text-center xl:text-left'>what can i do <span> .... </span></h1>
            <div className=''>
                <MainProjects />
            </div>
        </div>
    )
}

export default MySkills