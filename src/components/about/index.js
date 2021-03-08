import React from 'react'
import "../../styles/about.css"
import svg from '../../assets/about-img.svg'
import welcome from '../../assets/Programming.svg'

const About = () => {
    return (
    <div id="about" className="about-page">
      <div className="about__container">
        <div className="welcome__container">
          <h1><span>Hello, I'm Joaquin!</span> <br/> Welcome to my Portfolio</h1>
          <img src={svg} alt="img"/>
        </div>

        <div className="about__card">
          <h2>About me</h2>
            <div className="about__card__container">
              <div className="img__title">
                <img src={welcome} alt="img"/>
                <span>Fullstack Developer</span>
              </div>
              <div className="about__description">
                <p>
                I'm a Computer Engineering student and i also recently finished the SoyHenry bootcamp with more than 700 hours of practice in 
                technologies and tools oriented to Web and Mobile Development.
                   <br/>
                  I like doing sports, reading, watching programming videos and listening to music.  
                </p>
              </div>  
            </div>
        </div>
      </div>
    </div>
    );
}

export default About;