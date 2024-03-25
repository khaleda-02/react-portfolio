import React from "react";
import me from "../../asseste/me noBorder.jpg";
import SectionTem from "../SectionTem";
const About = () => {
  return (
    <SectionTem id="about">
      <h1 className="w-full heading ">
        who i am <span> ... </span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center xl:justify-start items-center xl:items-center text-lg">
        <div className=" w-[60%] md:w-[40%] lg:w-[30%] relative rounded-md group mx-auto ">
          <img src={me} alt="me" className="w-full bg-cover relative z-[5]" />
          <div className="hidden lg:w-full h-full absolute left-0 top-0 z-[10]   group-hover:bg-green/40 duration-700 "></div>
          <div className="hidden lg:w-full h-full absolute right-[-15px] bottom-[-15px] z-[0] border-solid border-2 border-green group-hover:right-0 group-hover:bottom-0 duration-700 "></div>
        </div>
        <div className="w-[90%] md:w-[58%] xl:w-[50 mx-auto lg:mr-auto lg:ml-0 text-left md:text-center xl:text-left leading-8 xl:leading-8 text-slate ">
          <p className="text-base lg:text-[18px] w-[90%] mb-6 mx-auto mt-4 lg-mt-0 lg:mr-auto lg:ml-0 text-center lg:text-left">
            I'm Khaled, an enthusiastic
            <span className="sub-text"> A Full Stack Web Developer </span>
            dedicated to crafting software solutions that help businesses
            thrive. Your website is your customers' first impression, and I'm
            here to make it beautiful, functional, and user-friendly. Let's work
            together to create a standout online presence.
          </p>
          <p className="text-[18px] w-[90%]my-6 mr-auto hidden lg:block text-center lg:text-left">
            I started my coding journey almost a 3 year ago and now I'm{" "}
            <span className="sub-text">software development graduated</span> and
            doing freelance projects on the side. You may have noticed from my
            portfolio, but I'm obsessed with unique, interesting design and
            user-friendly functionality so hit me up with your weird artistic
            project ideas or app proposals.
          </p>
        </div>
      </div>
    </SectionTem>
  );
};

export default About;
