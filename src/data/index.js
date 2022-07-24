import rocketnotes from '../assets/rocketnotes.gif';
import gitfav from '../assets/gitfav.jpg';
import focustimer from '../assets/focustimer.gif';
import explorer from '../assets/explorer.gif';
import psiIndica from '../assets/psiindica.gif';
import classroom from '../assets/classroom.gif';

export const PROJECTS = [
  {
    id: 0,
    title: 'Rocket Notes',
    github: 'https://github.com/M0nicaVaz/RocketNotes',
    live: 'userocketnotes.netlify.com/',
    description:
      'An application to keep your links and notes. During this project I was able to learn about frontend and backend integration, as well as authentication, jwt and password encryption. The tech stack is React, Node, SQLite, Knex and Styled-Components.',
    stack: ['React', 'Node', ' SQL'],
    image: rocketnotes,
  },

  {
    id: 1,
    title: 'Classroom',
    description: 'Essa é a descrição da aula 3',
    stack: ['React', ' GraphCMS', 'Tailwind'],
    image: classroom,
  },

  {
    id: 2,
    title: 'Explorer',
    description: 'Essa é a descrição da aula 2',
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: explorer,
  },

  {
    id: 3,
    title: 'Git Fav',
    description: 'Essa é a descrição da aula 3',
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: gitfav,
  },

  {
    id: 4,
    title: 'Psi Indica',
    description: 'Essa é a descrição da aula 3',
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: psiIndica,
  },

  {
    id: 5,
    title: 'Focus Timer',
    description: 'Essa é a descrição da aula 3',
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: focustimer,
  },
];
