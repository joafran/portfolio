import React, { useState } from 'react'
import '../../styles/skills.css'
import webCreator from '../../assets/website-creator-illustration.svg'

const Skills = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="skills__page">
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
                        Languages/Frameworks
                        </button>
                        <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                        >
                        Dev Tools
                        </button>
                        <button
                        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(3)}
                        >
                        Skills
                        </button>
                        <button
                        className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(4)}
                        >
                        In progress
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                        <h2>Content 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                            vel voluptatum?
                        </p>
                        </div>

                        <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                        <h2>Content 2</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                            voluptatum qui adipisci.
                        </p>
                        </div>

                        <div
                        className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                        <h2>Content 3</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                        </div>

                        <div
                        className={toggleState === 4 ? "content  active-content" : "content"}
                        >
                        <h2>Content 4</h2>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                            Accusamus in quia odit aspernatur provident et ad vel distinctio
                            recusandae totam quidem repudiandae omnis veritatis nostrum
                            laboriosam architecto optio rem, dignissimos voluptatum beatae
                            aperiam voluptatem atque. Beatae rerum dolores sunt.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;