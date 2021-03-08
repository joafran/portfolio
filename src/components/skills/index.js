import React, { useState } from 'react';
import '../../styles/skills.css';
import webCreator from '../../assets/website-creator-illustration.svg';
import icons from './icons'

const Skills = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div id="skills" className="skills__page">
            <div className="skills__container">
                <div className="skills__header">
                    <img src={webCreator}/>
                    <h2>I have knowledge in...</h2>
                </div>
                <div className="tab-container">
                    <div className="bloc-tabs">
                        <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                        >
                        Skills
                        </button>
                        <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                        >
                        Tools
                        </button>
                        <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                        >
                        In progress
                        </button>
                        
                    </div>

                        <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                        <div className="icon-container">

                            {icons.Skills.map((el, i) => (
                                <div key={i} className="icon">
                                    {el.icon()}
                                    <span>{el.name}</span>
                                </div>
                            ))}
                        </div>

                        </div>

                        <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                        <div className="icon-container">

                            {icons.DevTools.map((el, i) => (
                                <div key={i} className="icon">
                                    {el.icon()}
                                    <span>{el.name}</span>
                                </div>
                            ))}
                        </div>

                        </div>

                        <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                        <div className="icon-container">

                            {icons.InProgress.map((el, i) => (
                                <div key={i} className="icon">
                                    {el.icon()}
                                    <span>{el.name}</span>
                                </div>
                            ))}
                        </div>

                        </div>

                    </div>
                </div>
            </div>
    );
}

export default Skills;