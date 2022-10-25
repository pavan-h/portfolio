import React  from "react";
import projects from "../projects.json";
import "../styles/homePro.scss";

const HomeProject = () => {
       
 




  return (
    <>
      <section id="projects">
        <div className="projects">
          <div>
            <h1 className="pro-heading">Projects<span>.</span></h1>
          </div>
          <div className="project-list">
            {projects &&
              projects.map(({ name, id, skills, images, livePage, github }) => (
                <div key={id} className="project">
                  <div className="project-img">
                    <a href={livePage} target="blank">
                      <img src={images} alt="image" />
                    </a>
                  </div>
                    <div className="project-info">
                    <div className="project-title">
                    <a href={github} target="blank">
                      <h2>
                        <span>{name}</span>
                      </h2>
                      </a>
                    </div>
                    <div className="project-skills">
                      <p>{skills}</p>
                    </div>
                    
                  </div>
                  
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
    
};

export default HomeProject;
