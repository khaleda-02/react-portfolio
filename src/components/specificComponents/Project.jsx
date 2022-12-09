import { BsFillEyeFill } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

function NonPreferdProject({ id, title, imgScr, link, github, data, skills, preferd }) {
  console.log(preferd)
  return (
    <div className='w-[49%] relative flex justify-center items-center group my-10 text-yellow-200'>
      <img src={imgScr} alt={title} className='w-full h-full cover ' />
      <div className='absolute w-full h-full left-0 top-0 bg-black/70 z-10 group-hover:opacity-0 duration-500'></div>
      <div className='caveat w-fit max-w-[100%] text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20  font-bold capitalize font-mono text-4xl group-hover:top-[105%] group-hover:translate-y-0 duration-500 tracking-wider '>{title}</div>
      <div className='z-50 group absolute top-0 right-0 opacity-0 group-hover:opacity-[1] duration-500 w-full h-full flex items-end  justify-end gap-7 p-6'>
        <a href={github} target="_blank" rel="noreferrer" className=' animate-bounce h-8 '><FaGithubSquare size={50} /></a>
        <a href={link} target="_blank" rel="noreferrer" className=' animate-bounce h-8 '><BsFillEyeFill size={50} /></a>
      </div>
    </div>
  )
}


function PreferdProject({ id, title, imgScr, link, github, data, skills, preferd }) {
  console.log(preferd)
  return (
    <div className={`w-[100%] h-[45vh] relative flex justify-between items-center group my-10 ${id % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
      <div className='w-[65%] h-full relative group'>
        <img src={imgScr} alt="title" className='w-full h-full cover rounded-lg' />
        <div className='absolute left-0 top-0 w-full h-full bg-green/30 hover:opacity-0 duration-500 rounded-lg'></div>
      </div>
      <div className={`w-[55%] absolute  top-[50%] translate-y-[-50%] ${id % 2 === 0 ? "text-right right-0" : "text-left left-0"}`}>
        <div className='cairo font-extrabold capitalize text-5xl my-9  tracking-wider text-green'>{title}</div>
        <p className='text-slate text-xl bg-light-navy rounded-lg px-5 py-4 tracking-wide leading-10 font-bold'>{data}</p>
        <div className={`flex  items-center ${id % 2 === 0 ? "justify-end" : "justify-start"}`}>{skills.map(skill => {
          return <p className='px-3 py-2'> # {skill}</p>
        })}</div>
      </div>
    </div>
  )
}




export default {PreferdProject , NonPreferdProject}