import React from 'react';
import '../../styles/projects.css'
import dubsnip from '../../assets/dubsnip.png'
import integrAR from '../../assets/integrAR-screen.png'
import Tilt from 'react-parallax-tilt'

const Projects = () => {
    return (
        <div id="projects" className="projects-page">
            <div className="projects-container">
                <h2><span>{'</>'}</span> Projects</h2>

                <div className="project-card-container">
                    <Tilt>
                        <div className="project-card">
                            <h3>Dubsnip</h3>
                            <div className="project-card-body">
                                <div className="project-card-technologies">
                                    <img src={dubsnip} alt="dubsnip"/>
                                <p>An e-commerce of the bootcamp "soyHenry" made with a team of 5 members using SCRUM methodology.<br/>
                                <a href="https://dubsnip.vercel.app">See the page</a></p>
                                </div>
                                    <p><span>Technologies:</span> React-Redux, Node-Express, PostgreSQL-Sequelize.</p>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt>
                        <div className="project-card">
                            <h3>integrAR</h3>
                            <div className="project-card-body">
                                <div className="project-card-technologies">
                                <img src={integrAR} alt="integrAR"/>
                                    <p>The final project of the "soyHenry" bootcamp, 
                                        a mobile app that simulates an educational institution,
                                        specifically a high school.<br/> <a href="dubsnip.vercel.app">See the code</a>
                                    </p>
                                </div>
                                    <p><span>Technologies:</span> GraphQL, React Native, MongoDB</p>
                            </div>
                        </div>
                    </Tilt>

                </div>
            </div>
        </div>
    );
}

export default Projects;