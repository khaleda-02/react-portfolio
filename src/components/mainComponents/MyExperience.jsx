import React, { useState } from "react";
import SectionTem from "../SectionTem";
const MyExperience = () => {
  const experience = {
    2020: {
      title: "Starting Point | Front end Dev.",
      points: [
        "start learning html,css, and javascript.",
        "practiced problems solving on leetscode and codewars.",
        "knew about the UI frameworks like: react and angular, and I chose to learn React.",
      ],
    },
    2021: {
      title: "React Dev.",
      points: [
        "I got an offer at local company and required a project, built a e-school website using react with redux as state management, and tailwind for Ui , and I was the main developer in the team, this project done within 2 months.",
        "started freelancing at upwrok and got many jobs with 4-5 stars review, here's my profile.",
        "me and my friend hamada stared to learn node.js and express.js.",
      ],
    },
    2023: {
      title: "Fullstack Dev.",
      points: [
        "got an internship at Dash company as a backend developer using node.js and nestjs, I built many backend projects and got an excellent feedback and took a special trainee badge.",
        "built a team with my colleagues and built many fake projects as a training.",
        "recently my focus was on problem solving contest, and me and my friends participated in the pcpc contest and we got the top ten across gaza city.",
        "got 89% job success on upwork, and more than 6 jobs.",
      ],
    },
  };
  //TODO : make the default value of the state the length of the map's keys.
  //TODO : upwork profile, and dash comapny link
  //TODO : make a compo for year button
  //TODO : specify the active year.
  const [year, setYear] = useState(2020);
  return (
    <SectionTem id="experience">
      <h1 className="w-full heading ">
        Technical Experience<span> .... </span>
      </h1>

      <div className="w-full flex justify-center lg:justify-start items-start flex-wrap gap-5">
        <div className="w-full md:w-[15%] flex lg:flex-col justify-center items-center lg:gap-4">
          <button
            className="text-green font-extrabold  text-xl md:text-2xl mb-3 mx-3"
            onClick={() => setYear(2020)}
          >
            2020
          </button>
          <button
            className="text-green font-extrabold  text-xl md:text-2xl mb-3 mx-3"
            onClick={() => setYear(2021)}
          >
            2021
          </button>
          <button
            className="text-green font-extrabold  text-xl md:text-2xl mb-3 mx-3"
            onClick={() => setYear(2023)}
          >
            2023
          </button>
        </div>
        <div className="w-full md:w-[8%] lg:w-[70%] xl:pt-4">
          <h2 className="font-bold text-2xl text-green capitalize">
            {experience[year].title}
          </h2>
          <ol className="pt-0 m-0">
            {experience[year].points.map((e) => (
              <li className="capitalize text-slate text-lg">{e}</li>
            ))}
          </ol>
        </div>
        {/* <Major
          majorName="backend development"
          skills={["Node.js ", "typescript", "nest.js", "express.js"]}
        />
        <Major
          majorName="frontend development"
          skills={[
            "React",
            "Redux toolkit",
            "React Query ",
            "vue",
            "Tailwindcss , Bootstrap",
          ]}
        />
        <Major majorName="Database" skills={["MYSQL", "MongoDB", "Postgres"]} />
        <Major
          majorName="familiar with"
          skills={["aws", "GraphQl", "Docker", "redis"]}
        /> */}
      </div>
    </SectionTem>
  );
};

const Major = ({ majorName, skills }) => {
  return (
    <div className="w-full md:w-[45%] lg:w-[23%] ml-2 mb-2">
      <h2 className="font-bold text-xl text-green capitalize">{majorName} </h2>
      <ol className="pt-0 m-0">
        {skills.map((e) => (
          <li className="capitalize text-slate">{e}</li>
        ))}
      </ol>
    </div>
  );
};
export default MyExperience;
