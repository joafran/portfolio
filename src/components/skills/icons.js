import { GrReactjs, GrGraphQl, GrNode } from 'react-icons/gr';
import { RiReactjsLine } from 'react-icons/ri'
import {
    SiRedux,
    SiMongodb,
	SiPostgresql,
	SiBootstrap,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiGit,
    SiVisualstudiocode,
    SiTrello,
    SiGithub,
    SiExpo,
    SiMaterialUi,
    SiNextDotJs,
    SiMicrosoftazure,
    SiJava,
    SiTypescript,
    SiDocker
} from 'react-icons/si';

const icons = {
    Skills: [
        {name: 'Redux', icon: SiRedux},
        {name: 'GraphQL', icon: GrGraphQl},
        {name: 'PostgreSQL', icon: SiPostgresql},
        {name: 'Node', icon: GrNode},
        {name: 'React', icon: GrReactjs},
        {name: 'React Native', icon: RiReactjsLine},
        {name: 'Javascript', icon: SiJavascript},
        {name: 'HTML', icon: SiHtml5},
        {name: 'CSS', icon: SiCss3},
        {name: 'Bootstrap', icon: SiBootstrap},
        {name: 'MongoDB', icon: SiMongodb},
    ],
    DevTools: [
        {name: 'Git', icon: SiGit},
        {name: 'Github', icon: SiGithub},
        {name: 'Trello', icon: SiTrello},
        {name: 'Expo', icon: SiExpo},
        {name: 'VS Code', icon: SiVisualstudiocode},
    ],
    InProgress: [
        {name: 'Azure', icon: SiMicrosoftazure},
        {name: 'Next js', icon: SiNextDotJs},
        {name: 'Typescript', icon: SiTypescript},
        {name: 'Java', icon: SiJava},
        {name: 'Material UI', icon: SiMaterialUi},
        {name: 'Docker', icon: SiDocker},
    ]
};

export default icons;