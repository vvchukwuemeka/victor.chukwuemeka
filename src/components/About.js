import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="about"> 
       <span className="aboutTitle">About</span>
       <span className="aboutDesc">I am passionate about turning ideas to reality by developing products that solves needs. This made me to join SkillsCity Bootcamp to learn coding.  I am super excited to develop this portfolio website, though still under construction. My areas of expertise are as follows.</span>
       <div className="aboutIems">
            
       <div className='aboutItem'> 
       <img src="./images/programming-1873854_1280.webp" alt='frontend pic' className="aboutImg"/>
       <div className='aboutItemText'>
       <h3>Frontend Developer</h3>
       <p></p>
       </div>
       </div>

       <div className='aboutItem'>
       <img src="./images/business-analysis-concept.jpg" alt='business pic' className="aboutImg"/>
       <div className='aboutItemText'>
       <h3>Business Process Analyst</h3>
       <p></p>
       </div>
       </div>   

       <div className="aboutItem">
       <img src="./images/About image-blurry-hand-touching-screen_23-2149311914.avif" alt=' Cloudpic' className="aboutImg"/>
       <div className="aboutItemText">
        <h3>DevOps</h3>
        <p></p>
        </div>
        </div>  

       </div>
      </section>
  )
}

export default About;