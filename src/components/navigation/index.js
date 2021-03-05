import React from 'react';

const Navigation = () => {
    return (
        <div className="nav__container">
            <ul>
                <li className="nav__item"><span>About me</span><a href="#"> <img className="nav__link" src="#" alt="icon"/> </a></li>
                <li className="nav__item"><span>Skills</span><a href="#"> <img className="nav__link" src="#" alt="icon"/> </a></li>
                <li className="nav__item"><span>Projects</span><a href="#"> <img className="nav__link" src="#" alt="icon"/> </a></li>
                <li className="nav__item"><span>Contact</span><a href="#"> <img className="nav__link" src="#" alt="icon"/> </a></li>
            </ul>
        </div>
    );
}

export default Navigation;