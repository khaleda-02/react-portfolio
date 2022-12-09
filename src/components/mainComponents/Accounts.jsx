import React from 'react'
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb'

const Social = () => {
    return (
        <div className="fixed left-24  bottom-0 flex flex-col justify-center items-center gap-5 " >
            <TbBrandGithub className="text-slate hover:text-green hover:translate-y-[-4px] duration-300 cursor-pointer" size={40} />
            <TbBrandLinkedin className="text-slate hover:text-green hover:translate-y-[-4px] duration-300 cursor-pointer" size={40} />
            <TbBrandTwitter className="text-slate hover:text-green hover:translate-y-[-4px] duration-300 cursor-pointer" size={40} />
            <TbBrandInstagram className="text-slate hover:text-green hover:translate-y-[-4px] duration-300 cursor-pointer" size={40} />
            <div className="w-[2px] h-[120px] bg-slate"></div>
        </div>
    )
}
const Email = () => {
    return (
        <div className="fixed right-4  bottom-0 flex flex-col justify-center items-center gap-5 ">
            <a href="mailto:khaleda.02@gmail.com" alt="email" className="text-slate rotate-90 hover:text-green hover:translate-y-[-4px] duration-300 mb-24 text-xl" rel="noreferrer" target='_blank'>khaleda.02@gmail.com</a>
            <div className="w-[2px] h-[120px] bg-slate"></div>
        </div>
    )
}

export default { Email, Social }