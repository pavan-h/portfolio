import React from 'react'
import "../styles/about.scss"




const About = () => {
  return (
       <>
         <section id="intro">
        <div className="intro">
          <div className="text-wrap">
            <h1 className="info-title">
              <span>Hello<strong>.</strong></span>
              <span>I am <span className='name'><a href="https://github.com/pavan-h" target="blank">Pavan</a></span></span>
            </h1>

            <div className="info-wrap">
            <h3 className="typing">
              <span>Frontend Web Developer</span>
              <span>Freelancer</span>
            </h3>
          </div>
            
          </div>

          <div className="about">
            <p>
              <span>
                I'm a self-taught front-end developer from India. I've become   
              </span>
              <span>familiar with <strong>HTML</strong>, <strong>CSS/SASS</strong>, <strong>Javascript</strong>, and Bootstrap. </span>
              <span></span>
              <span>am searching for an intership as a web developer. the idea of</span>
              <span> combining my understanding of programming
              </span>
              <span> with the art of desgin fascinate me about web development.</span>
              <span> Stay in <a href="#contact" ><strong className="contact-link">touch</strong></a></span>
            </p>
          </div>
        </div>
        </section>
       </> 
    )
}


export default About;