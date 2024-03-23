import React from "react";
import ProjectsData from "../../data/ProjectsData";
import Project from "./Project";
function MainProjects() {
  return (
    <>
      {ProjectsData.map((element) => {
        return (
          <div className="py-10">
            <div className="flex justify-between items-center gap-4 flex-wrap">
              {element.id === 1 ? (
                <>
                  {element.projects.map((pro) => {
                    return (
                      <>
                        {
                          <Project.PreferdProject
                            id={pro.id}
                            title={pro.title}
                            imgScr={pro.img}
                            link={pro.link}
                            github={pro.github}
                            data={pro.data}
                            skills={pro.skills}
                            preferd={pro.preferd}
                          />
                        }
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  {element.projects.map((pro) => {
                    return (
                      <>
                        {
                          <Project.NonPreferdProject
                            id={pro.id}
                            title={pro.title}
                            imgScr={pro.img}
                            link={pro.link}
                            github={pro.github}
                            data={pro.data}
                            skills={pro.skills}
                            preferd={pro.preferd}
                          />
                        }
                      </>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MainProjects;
