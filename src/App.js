import './App.css';
import { useState } from 'react';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  const [language, setLanguage] = useState(false);

  return (
    <div className="app">
      <div className="nav__container">
            <ul>
                <li className="nav__item"><span className="span_description">{language ? 'Sobre mi' : 'About me'}</span><a href="#about"> <img className="nav__link" src="https://cdn3.iconfinder.com/data/icons/emoticon-emoji-1/50/Omg-256.png" alt="icon"/> </a></li>
                <li className="nav__item"><span className="span_description">Skills</span><a href="#skills"> <img className="nav__link" src="https://cdn1.iconfinder.com/data/icons/corporate-and-business/64/10-Skills-256.png" alt="icon"/> </a></li>
                <li className="nav__item"><span className="span_description">{language ? 'Proyectos' : 'Projects'}</span><a href="#projects"> <img className="nav__link" src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-5/32/development_code_coding_laptop-512.png" alt="icon"/> </a></li>
                <li className="nav__item"><span className="span_description">{language ? 'Contacto' : 'Contact'}</span><a href="#contact"> <img className="nav__link" src="https://cdn2.iconfinder.com/data/icons/flat-seo-web-ikooni/128/flat_seo-23-256.png" alt="icon"/> </a></li>
                <li className="nav__item"><span className="span_description">{language ? 'English' : 'Español'}</span><button className="switch-lang" onClick={() => setLanguage(!language)} >{language ? 'EN' : 'ES'}</button></li>
            </ul>
        </div>
      <About lang={language} />  
      <Skills lang={language}/>
      <Projects lang={language}/>
      <Contact lang={language}/>
    </div>  
  );
}

export default App;
