import { RiGithubLine } from 'react-icons/ri'
import { TiArrowForwardOutline } from 'react-icons/ti'


function NonPreferdProject({ title, imgScr, link, github }) {
  return (
    <>
      <div className='flex w-[100%] md:w-[47%] relative  justify-center items-center group md:my-10 text-slate'>
        <img src={imgScr} alt={title} className='w-full h-full cover ' />
        <div className='absolute w-full h-full left-0 top-0 bg-black/70 z-10 md:group-hover:opacity-0 duration-500'></div>

        <div className='caveat tracking-wider text-3xl md:text-4xl w-[100%] text-center font-bold capitalize
            absolute left-[50%] top-[50%] z-20 translate-x-[-50%] translate-y-[-50%]
            md:group-hover:top-[105%] md:group-hover:translate-y-0 duration-500'>{title}</div>

        <div className='z-50 group absolute top-0 right-0 md:opacity-0 md:group-hover:opacity-[1]
          duration-500 w-full h-full flex items-end  justify-end gap-4 md:gap-7 p-2 md:p-6'>
          <a href={github} target="_blank" rel="noreferrer" className=' md:animate-bounce md:h-8  text-4xl md:text-5xl'><RiGithubLine /></a>
          <a href={link} target="_blank" rel="noreferrer" className='  md:animate-bounce md:h-8  text-4xl md:text-5xl '><TiArrowForwardOutline /></a>
        </div>
      </div>
    </>
  )
}


function PreferdProject({ id, title, imgScr, link, github, data, skills }) {
  return (
    <>
      <div className={`hidden lg:flex w-[100%] h-[45vh] relative  justify-between items-center group my-10 ${id % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
        <div className='w-[65%] h-full relative group'>
          <img src={imgScr} alt="title" className='w-full h-full cover rounded-lg' />
          <div className='absolute left-0 top-0 w-full h-full bg-green/30 hover:opacity-0 duration-500 rounded-lg'></div>
        </div>
        <div className={`w-[55%] absolute  top-[50%] translate-y-[-50%] ${id % 2 === 0 ? "text-right right-0" : "text-left left-0"}`}>
          <div className='cairo font-extrabold capitalize text-5xl my-9  tracking-wider text-green'>{title}</div>
          <p className='text-slate text-xl bg-light-navy rounded-lg px-5 py-4 tracking-wide leading-10 font-bold'>{data}</p>
          <div className={`flex  items-center ${id % 2 === 0 ? "justify-end" : "justify-start"}`}>{skills.map(skill => {
            return <p className='px-3 py-2'> # {skill}</p>
          })}
          </div>
          <div className={`flex items-center  gap-7 p-6 ${id % 2 === 0 ? "justify-end" : "justify-start"}`}>
            <a href={github} target="_blank" rel="noreferrer" className=' animate-bounce h-2 '><RiGithubLine size={50} /></a>
            <a href={link} target="_blank" rel="noreferrer" className=' animate-bounce h-2 '><TiArrowForwardOutline size={50} /></a>
          </div>
        </div>
      </div>
      <div className={`flex lg:hidden w-[100%] min-h-[500px]   relative  justify-cneter items-center group my-10 rounded-sm`}>
        <div className={`absolute min-w-full min-h-full top-0 left-0 bg-light-navy/90 rounded-sm py-2 px-5 flex flex-col items-start justify-center `}>
          <div className='cairo font-extrabold capitalize text-4xl tracking-wider text-green'>{title}</div>
          <p className='text-white text-lg  rounded-sm tracking-normal leading-8 my-3 '>{data}</p>
          <div className={`flex  items-center justify-start`}>{skills.map(skill => {
            return <p className='pr-3 py-2 text-green'>{skill}</p>
          })}
          </div>
          <div className={`flex items-center  gap-7 p-6 pl-0 justify-start`}>
            <a href={github} target="_blank" rel="noreferrer" className=' animate-bounce h-2 '><RiGithubLine size={50} /></a>
            <a href={link} target="_blank" rel="noreferrer" className=' animate-bounce h-2 '><TiArrowForwardOutline size={50} /></a>
          </div>
        </div>
        <img src={imgScr} alt="title" className='w-full min-h-[500px]   cover rounded-sm' />
      </div>
    </>
  )
}



export default { PreferdProject, NonPreferdProject }

