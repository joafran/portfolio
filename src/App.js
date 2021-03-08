import './App.css';
import { useState } from 'react';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {

  return (
    <div className="app">
      <div className="nav__container">
            <ul>
                <li className="nav__item"><span className="span_description">About me</span><a href="#about"> <img className="nav__link" src="https://cdn3.iconfinder.com/data/icons/emoticon-emoji-1/50/Omg-256.png" alt="icon"/> </a></li>
                <li className="nav__item"><span className="span_description">Skills</span><a href="#"> <img className="nav__link" src="https://cdn1.iconfinder.com/data/icons/corporate-and-business/64/10-Skills-256.png" alt="icon"/> </a></li>
                <li className="nav__item"><span className="span_description">Projects</span><a href="#"> <img className="nav__link" src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-5/32/development_code_coding_laptop-512.png" alt="icon"/> </a></li>
                <li className="nav__item"><span className="span_description">Contact</span><a href="#"> <img className="nav__link" src="https://cdn2.iconfinder.com/data/icons/flat-seo-web-ikooni/128/flat_seo-23-256.png" alt="icon"/> </a></li>
            </ul>
        </div>
      <About />  
      <Skills />
      <Projects />
      <Contact />
    </div>  
  );
}

export default App;
