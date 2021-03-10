import React from 'react';
import '../../styles/projects.css'
import dubsnip from '../../assets/dubsnip.png'
import integrAR from '../../assets/integrAR-screen.png'
import Tilt from 'react-parallax-tilt'

const Projects = ({lang}) => {
   
    return (
        <div id="projects" className="projects-page">
            <div className="projects-container">
                <h2><span>{'</>'}</span> {lang ? 'Proyectos' : 'Projects'}</h2>

                <div className="project-card-container">
                    <Tilt>
                        <div className="project-card">
                            <h3>Dubsnip</h3>
                            <div className="project-card-body">
                                <div className="project-card-technologies">
                                    <img src={dubsnip} alt="dubsnip"/>
                                <p>{lang ? `Un e-commerce de instrumentos musicales del bootcamp "soyHenry" hecho con un equipo de 5 integrantes usando la metodologia SCRUM` : `An e-commerce of musical intruments of the bootcamp "soyHenry" made with a team of 5 members using SCRUM methodology`}.<br/>
                                <a href="https://dubsnip.vercel.app">{lang ? 'Ver Pagina' : 'See the page'}</a></p>
                                </div>
                                    <p><span>{lang ? 'Tecnologias' : 'Technologies'}:</span> React-Redux, Node-Express, PostgreSQL-Sequelize.</p>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt>
                        <div className="project-card">
                            <h3>integrAR</h3>
                            <div className="project-card-body">
                                <div className="project-card-technologies">
                                <img src={integrAR} alt="integrAR"/>
                                    <p>
                                        {lang ? `Proyecto Final del bootcamp soyHenry, una aplicación móvil que simula una institucion educativa, específicamente una escuela secundaria.` : `The final project of the "soyHenry" bootcamp, 
                                        a mobile app that simulates an educational institution,
                                        specifically a high school.`}
                                    </p>
                                </div>
                                    <p><span>{lang ? 'Tecnologias' : 'Technologies'}:</span> GraphQL, React Native, MongoDB</p>
                            </div>
                        </div>
                    </Tilt>

                </div>
            </div>
        </div>
    );
}

export default Projects;