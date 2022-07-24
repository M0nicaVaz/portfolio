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
    live: 'https://userocketnotes.netlify.app/',
    description:
      'An application to keep your links and notes. During this project, I was able to learn about frontend and backend integration, as well as authentication, JWT and password encryption.',
    stack: ['React', 'Styled-Components', 'Knex', 'Node', ' SQL'],
    image: rocketnotes,
  },

  {
    id: 1,
    title: 'Classroom Environment',
    github: 'https://github.com/M0nicaVaz/classroom-platform',
    live: 'https://classroom-platform.vercel.app/',
    description:
      'A classroom environment, in which we used GraphQL and React to consume our GraphCMS API. Developed throughout the IgniteLab, from RocketSeat',
    stack: ['React', 'TypeScript', 'GraphCMS', 'Apollo', 'Tailwind'],
    image: classroom,
  },

  {
    id: 2,
    title: 'Explorer',
    github: 'https://github.com/M0nicaVaz/explorer',
    live: 'https://m0nicavaz.github.io/explorer/',
    description: `A vanilla JavaScript SPA that was developed to document my progress as a Web Developer, throughout my studies on Rocketseat's program, 'Explorer'. I used Linktree's concept as my inspiration to build this website.`,
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: explorer,
  },

  {
    id: 3,
    title: 'Git Fav',
    github: 'https://github.com/M0nicaVaz/GitFav',
    live: 'https://m0nicavaz.github.io/GitFav/',
    description: `Developed to group your favorite GitHub profiles! To do so, we consumed the GitHub API, so we have access to the public information about the user searched!`,
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: gitfav,
  },

  {
    id: 4,
    title: 'Psi Indica',
    github: 'https://github.com/M0nicaVaz/Psi.Indica',
    live: 'https://psiindica.netlify.app/',
    description:
      'A landing page for the Instagram project @psi.indica, in which the user can choose the type of content that they want to consume, so cards may be displayed correspondingly, including a random option.',
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: psiIndica,
  },

  {
    id: 5,
    title: 'Focus Timer',
    github: 'https://github.com/M0nicaVaz/FocusTimer',
    live: 'https://m0nicavaz.github.io/FocusTimer/',
    description: 'A Pomodoro Timer with different sounds to help you focus!',
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: focustimer,
  },
];
