import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Nav = ({ toggle, scroll }) => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [navVisibility, setNavVisibility] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > prevScrollPosition) {
        setNavVisibility(false);
      } else {
        setNavVisibility(true);
      }
      setPrevScrollPosition(currentScrollPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPosition, setPrevScrollPosition]);

  // return (
  //     <div className={` ${!scroll ? "bg-light-navy " : "bg-navy "}`}>
  //         {/* top-[${navVisibility ? "0" : "-100%"}] */}
  //         <div className={`w-[90%] mx-auto fixed ${navVisibility ? "top-[0]" : "top-[-10vh]"} left-[50%] translate-x-[-50%] bg-navy  h-[10vh] flex justify-between items-center z-[300]`}>
  //             <button className='text-green text-2xl font-bold capitalize courier' >khaled</button>
  //             <button className='text-green text-2xl md:text-4xl font-bold capitalize courier ' onClick={() => {
  //                 toggle(pre => !pre)
  //             }}  >{!scroll ? <ImCross className="md:mr-3" /> : <FaBars />}</button>
  //         </div>
  //         <div className={`w-full h-[90vh] absolute top-[10vh] ${!scroll ? " left-0 " : " left-[100%] "} bg-light-navy flex items-center justify-center duration-[0.4s]  z-20  `}>
  //             <div className={`flex flex-col justify-center items-center  gap-10  `}>
  //                 <h1 className='text-center text-sm font-light text-green uppercase p-0 m-0'>- Menu -</h1>
  //                 <a href='#about' onClick={() => { toggle(pre => !pre) }} alt='link' className='text-5xl md:text-7xl text-green font-extrabold  hover:tracking-widest duration-300 capitalize'>about</a>
  //                 <a href='#skills' onClick={() => { toggle(pre => !pre) }} alt='link' className='text-5xl md:text-7xl text-green font-extrabold  hover:tracking-widest duration-300 capitalize'>Skills</a>
  //                 <a href='#work' onClick={() => { toggle(pre => !pre) }} alt='link' className='text-5xl md:text-7xl text-green font-extrabold  hover:tracking-widest duration-300 capitalize'>work</a>
  //                 <a href='#contact' onClick={() => { toggle(pre => !pre) }} alt='link' className='text-5xl md:text-7xl text-green font-extrabold  hover:tracking-widest duration-300 capitalize'>contact </a>
  //             </div>
  //         </div>
  //     </div>
  // )
  return (
    <div
      className={`w-[90%] mx-auto bg-navy h-[10vh] fixed top-[0] 
      left-[50%] translate-x-[-50%] flex justify-between items-center z-[300]`}
    >
      <a
        href="#me"
        alt="link"
        className="text-green text-lg md:text-2xl font-bold capitalize courier"
      >
        khaled
      </a>
      <div className={`flex justify-end items-center gap-2 md:gap-10  `}>
        <NavLink name="about" />
        <NavLink name="experience" />
        <NavLink name="work" />
        <NavLink name="offer & contact" link="offer" />
        {/* <NavLink name="contact" /> */}
      </div>
    </div>
  );
};

const NavLink = ({ name, link }) => {
  return (
    <a
      href={`#${link ?? name}`}
      alt="link"
      className="text-xs sm:text-base text-green font-extrabold  hover:tracking-widest duration-300 capitalize"
    >
      {name}
    </a>
  );
};
export default Nav;
