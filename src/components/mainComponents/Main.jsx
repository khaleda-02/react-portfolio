import React from "react";
import SectionTem from "../SectionTem";
const Main = () => {
  return (
    <SectionTem id="me">
      <div className="hidden w-full lg:flex justify-start items-center ">
        <div>
          <p className="tag leading-6 text-green courier mb-5 ">
            {"<MyInfo >"}
          </p>

          {/* Name  */}
          <p className="tag leading-6 text-green courier ml-12">
            {"<MyName >"}
          </p>
          <p className=" content  text-white  leading-10 font-bold text-[28px]  courier ml-[6rem]">
            khaled Ayman alkhalili
          </p>
          <p className="tag leading-6 text-green courier ml-12">
            {"</MyName >"}
          </p>

          {/*job description  */}
          <p className="tag leading-6 text-green courier ml-12 mt-5">
            {"<JobTitle >"}
          </p>
          <p className=" content  text-white  leading-10 font-bold text-[28px]  courier ml-[6rem]">
            Full Stack Developer
          </p>
          <p className="tag leading-6 text-green courier ml-12">
            {"</JobTitle >"}
          </p>

          {/*Info  */}
          <p className="tag leading-6 text-green courier ml-12 mt-5">
            {"<Me >"}
          </p>
          <p className="courier  w-[80%]   content  text-white  leading-10 font-bold text-[22px] xl:text-[25px]  courier ml-[6rem] ">
            <span className="sub-text">Full Stack </span>enthusiast, driven by a
            passion for tackling complex challenges. Every day, I'm eager to
            learn and apply my skills to create exceptional projects. Let's
            embark on a journey to build remarkable web solutions! 😊:-)
          </p>
          <p className="tag leading-6 text-green courier ml-12"> {"</Me >"} </p>
          <p className="tag leading-6 text-green courier my-5">
            {"</MyInfo >"}
          </p>
        </div>
      </div>
      <div className="lg:hidden max-w-[90%] mx-auto min-h-[90vh] flex items-center justify-center ">
        <div className="text-green text-center capitalize">
          <h1 className="caveat  font-bold tracking-widest text-4xl md:text-5xl  ">
            khaled elkhalili
          </h1>
          <h5 className="caveat capitalize my-4 text-[1.3rem] md:text-3xl md:tracking-wider">
            web creater : Full Stack Developer;
          </h5>
          <p className="text-slate leading-6">
            <span className="sub-text">Full Stack </span>enthusiast, driven by a
            passion for tackling complex challenges. Every day, I'm eager to
            learn and apply my skills to create exceptional projects. Let's
            embark on a journey to build remarkable web solutions! 😊:-)
          </p>
        </div>
      </div>
    </SectionTem>
  );
};

export default Main;
