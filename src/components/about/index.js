import React from 'react'
import "../../styles/about.css"
import svg from '../../assets/about-img.svg'
import welcome from '../../assets/Programming.svg'

const About = ({lang}) => {
    return (
    <div className="about-page">
      <div className="about__container">
        <div className="welcome__container">
          {lang ? (
          <h1><span>Hola, soy Joaquin!</span> <br/> Bienvenido a mi Portfolio</h1>) 
          : (<h1><span>Hello, I'm Joaquin!</span> <br/> Welcome to my Portfolio</h1>
          )}
          
          
          <img src={svg} alt="img"/>
        </div>

        <div id="about" className="about__card">
          <h2>{lang ? 'Sobre mi' : 'About me'}</h2>
            <div className="about__card__container">
              <div className="img__title">
                <img src={welcome} alt="img"/>
                <span>Fullstack Developer</span>
              </div>
              <div className="about__description">
                <p>
                  {lang ? `Soy un estudiante de Ingenieria en Sistemas y estoy aprendiendo programacion de forma autodidacta, tambien hace poco finalice el bootcamp de soyHenry con mas de 700 horas de practica en
                  tecnologias y herramientas orientadas a la programacion web y móvil, a su vez estuve involucrado en 2 proyectos para la instancia final del bootcamp.` :
                   `I'm a Computer Engineering student and i'm learning programming in a self-taught way,
                    i also recently finished the soyHenry bootcamp with more than 700 hours of practice in technologies and tools oriented to web and mobile programming and where
                    i was involved in 2 projects for the final instance of the bootcamp.`}
                </p>
              </div>  
            </div>
        </div>
      </div>
    </div>
    );
}

export default About;