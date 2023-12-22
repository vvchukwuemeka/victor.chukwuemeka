import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id='hero'>
      <div className="heroContent">
        <span className="hello">Hello,</span>
        <span classname="heroText">I'm</span><span className="heroName">Victor</span> <br/> <span>Frontend Developer</span>
        <p className="heroPara">I am a skilled Frontend Developer with experience in building <br/>responsive and optimised websites. Contact me if you'd like to know more.</p>
        
      </div>
      <img src="./images/image1 (1).jpeg" alt='hero pic' className="heroPics"/>
      
      </section>
  )
}

export default Hero;