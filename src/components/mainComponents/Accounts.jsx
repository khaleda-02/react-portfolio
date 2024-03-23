import React from 'react'
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'

const Social = () => {
    return (
        <div className="xl:w-[215px] flex flex-row xl:flex-col justify-center items-center gap-5 relative xl:fixed xl:left-4 bottom-0 py-5 xl:py-0" >
            <a href="https://github.com/khaleda-02" rel="noreferrer" target="_blank" className="text-slate hover:text-green hover:translate-y-[-4px] duration-300 cursor-pointer">
                <TbBrandGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/khaled-elkhalili-656326244/" rel="noreferrer" target="_blank" className="text-slate hover:text-green hover:translate-y-[-4px] duration-300 cursor-pointer">
                <TbBrandLinkedin size={40} />
            </a>
            <a href="https://twitter.com/khaleda_02" rel="noreferrer" target="_blank" className="text-slate hover:text-green hover:translate-y-[-4px] duration-300 cursor-pointer">
                <TbBrandTwitter size={40} />
            </a>
            <a href="https://instagram.com/khaleda.02" rel="noreferrer" target="_blank" className="text-slate hover:text-green hover:translate-y-[-4px] duration-300 cursor-pointer">
                <TbBrandInstagram size={40} />
            </a>
            <div className="hidden xl:block w-[2px] h-[120px] bg-slate"></div>
        </div>
    )
}
const Email = () => {
    return (
        <div className="w-[215px] hidden xl:flex fixed right-4  bottom-0 flex-col justify-center items-center gap-5 ">
            <a href="mailto:khaleda.02@gmail.com" alt="email" className="text-slate rotate-90 hover:text-green hover:translate-y-[-4px] duration-300 mb-24 text-xl" rel="noreferrer" target='_blank'>khaleda.02@gmail.com</a>
            <div className="w-[2px] h-[120px] bg-slate"></div>
        </div>
    )
}

export default { Email, Social }