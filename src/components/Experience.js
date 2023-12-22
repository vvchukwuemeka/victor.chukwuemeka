import React from 'react';
import './Experience.css';


const Experience = () => {
  return  (
    <section id="experience">
    <span className='experienceTitle'>Experience and Skills</span>
    <span className='skillTitle'>Skills</span>

    
    <div className="experienceIems">
            
            <div className='experienceItem'> 
            <img src="./images/png-transparent-logo-html-html5.png" alt='HTML Pics' className="experienceImg"/>
            <div className='experienceItemText'>
            <h3>HTML</h3>
            
            </div>
            </div>

            <div className='experienceItem'> 
            <img src="./images/cssimage.png" alt='CSS Pics' className="experienceImg"/>
            <div className='experienceItemText'>
            <h3>CSS</h3>
            
            </div>
            </div>

            <div className='experienceItem'> 
            <img src="./images/JavaScript image.png" alt='JavaScript Pics' className="experienceImg"/>
            <div className='experienceItemText'>
            <h3>JavaScript</h3>
            
            </div>
            </div>

            <div className='experienceItem'> 
            <img src="./images/Reactimage.png" alt='React Pics' className="experienceImg"/>
            <div className='experienceItemText'>
            <h3>React</h3>

                        
            </div>
            </div>

            <div className='experienceItem'> 
            <img src="./images/AzureDevOpsimage.jpg" alt='AzureDevOps Pics' className="experienceImg"/>
            <div className='experienceItemText'>
            <h3>AzureDevOps</h3>
            
            </div>
            </div>

          <div className='workItems'> 
          <span className='workTitle'>Work Experience</span>

          
            <div className='workItem'>         
            <img src="./Logo.png" alt='Logo Pics' className="LogoImg"/>
            
            <h3 className='workRole'>Role:</h3> 
            <p>Software Engineer</p>
                                
            <h3 className='workPlace'>Organisation:</h3> 
            <h3 className='city'>SkillsCity Bootcamp Manchester</h3>
            <p className='workDesc'>Frontend Developer, Web Design</p>
            
            
            </div>
       
          
           

            
      </div>
    </div>
  </section>
  )
}

export default Experience;