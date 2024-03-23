import React from "react";
import SectionTem from "../SectionTem";
import { AiOutlineArrowRight } from "react-icons/ai";

const Offer = () => {
  return (
    <SectionTem id="offer">
      <h1 className="w-full heading center">What I Offer</h1>

      <p className="text-slate text-base lg:text-[18px] w-[90%] mx-auto mt-4 lg-mt-0 text-center">
        Whit more than <span className="sub-text">3 years of experience </span>I
        bring a unique blend of technical expertise and market understanding to
        elevate your brand and needs and amplify its message. I will build a
        website based on your requirements using the most wanted and best
        technology, thats would help your website to reach more users and make
        it soo friendly, to catch your client and make a special first
        imprecision to them.
        <div className="w-full mt-16 mb-32" id="contact">
          <h3 className="capitalize font-semibold text-center text-lg text-green">
            need a fullstack developer
          </h3>
          <div className="group flex justify-center items-center md:gap-3 hover:border-b-4  hover:border-green  hover:border-solid w-fit mx-auto py-4 px-3 duration-500">
            <a
              className="capitalize text-slate font-bold text-[1.25rem] md:text-2xl  sm:font-extrabold sm:text-5xl  text-center p-0 m-0  "
              href="mailto:khaleda.02f@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Let’s work together
            </a>
            <AiOutlineArrowRight className="text-slate group-hover:text-green duration-500 pt-2x m-0 text-[1.5rem] md:text-5xl pt-2" />
          </div>
        </div>
      </p>
    </SectionTem>
  );
};

export default Offer;
