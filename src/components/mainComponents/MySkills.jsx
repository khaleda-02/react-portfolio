import React from 'react'
import Notation from '../specificComponents/Notation'
import { RoughNotation } from "react-rough-notation";
import { SiJavascript, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiMaterialui, SiGithub, SiReact } from 'react-icons/si'
const MySkills = () => {
    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-center items-start overflow-hidden my-7'>
            <h1 className='w-full heading text-center xl:text-left'> My skills .... </h1>
            <RoughNotation type="underline" show={true} padding={20} strokeWidth={5} animationDuration={1900} >
                <div className='flex flex-wrap  justify-center lg:justify-start items-center md:py-10'>
                    <Notation child={<SiJavascript size={150} className="text-yellow-300 rounded-sm my-8   " />} />
                    <Notation child={<SiReact size={150} className="text-[#61DBFB] rounded-sm my-8   " />} />
                    <Notation child={<SiTailwindcss size={150} className="text-[#0284c7] rounded-sm my-8  " />} />
                    <Notation child={<SiBootstrap size={150} className="text-[#563d7c] rounded-sm my-8  " />} />
                    <Notation child={<SiHtml5 size={150} className="text-[#e34c26] rounded-sm my-8  " />} />
                    <Notation child={<SiCss3 size={150} className="text-[#264de4] rounded-sm my-8  " />} />
                    <Notation child={<SiMaterialui size={150} className="text-[#264de4] rounded-sm my-8  " />} />
                    <Notation child={<SiGithub size={150} className="text-[#333] rounded-sm my-8  " />} />

                </div>
            </RoughNotation>
        </div>
    )
}

export default MySkills