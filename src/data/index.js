import rocketnotes from '../assets/rocketnotes.gif';
import rocketnotesST from '../assets/rocketnotesST.jpg';
import gitfav from '../assets/gitfav.jpg';
import animeranking from '../assets/animeranking.gif';
import animerankingST from '../assets/animerankingST.jpg';
import explorer from '../assets/explorer.gif';
import psiIndica from '../assets/psiindica.gif';
import classroom from '../assets/classroom.gif';
import explorerST from '../assets/explorerST.jpg';
import psiIndicaST from '../assets/psiindicaST.jpg';
import classroomST from '../assets/classroomST.jpg';

export const PROJECTS = [
  {
    id: 0,
    title: 'Anime Ranking',
    github: 'https://github.com/M0nicaVaz/animeranking',
    live: 'https://animeranking.vercel.app/',
    description: `A full stack application to rank the animes you've watched! Axios was used to fetch the user's data from our database and also to fetch animes from a third-party api, that serves the anime guide.`,
    stack: ['React', 'Styled-Components', 'Knex', 'Node', ' SQL'],
    image: animeranking,
    imgST: animerankingST,
    slug: 'animeranking',
  },
  {
    id: 1,
    title: 'Rocket Notes',
    github: 'https://github.com/M0nicaVaz/RocketNotes',
    live: 'https://userocketnotes.netlify.app/',
    description:
      'An application to keep your links and notes easily grouped. During this project, I was able to learn about frontend and backend integration, as well as authentication, JWT, and password encryption.',
    stack: ['React', 'Styled-Components', 'Knex', 'Node', ' SQL'],
    image: rocketnotes,
    imgST: rocketnotesST,
    slug: 'rocketnotes',
  },

  {
    id: 2,
    title: 'Classroom Environment',
    github: 'https://github.com/M0nicaVaz/classroom-platform',
    live: 'https://classroom-platform.vercel.app/',
    description:
      'A classroom environment! The app was built with React and GraphQL to consume the GraphCMS API and display the lessons dynamically. This was developed throughout the IgniteLab, from RocketSeat.',
    stack: ['React', 'TypeScript', 'GraphCMS', 'Apollo', 'Tailwind'],
    image: classroom,
    imgST: classroomST,
    slug: 'classroom',
  },

  {
    id: 3,
    title: 'Explorer',
    github: 'https://github.com/M0nicaVaz/explorer',
    live: 'https://m0nicavaz.github.io/explorer/',
    description: `A vanilla JavaScript SPA that was developed to document my progress as a Web Developer, throughout my studies on Rocketseat's program 'Explorer'. I used Linktree's concept as my inspiration to build this website.`,
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: explorer,
    imgST: explorerST,
    slug: 'explorer',
  },

  {
    id: 4,
    title: 'Git Fav',
    github: 'https://github.com/M0nicaVaz/GitFav',
    live: 'https://m0nicavaz.github.io/GitFav/',
    description: `Developed to group your favorite GitHub profiles! The app consumes the GitHub API, so the user may  access the provided public information about the searched username.`,
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: gitfav,
    imgST: gitfav,
    slug: 'gitfav',
  },

  {
    id: 5,
    title: 'Psi Indica',
    github: 'https://github.com/M0nicaVaz/Psi.Indica',
    live: 'https://psiindica.netlify.app/',
    description:
      'A landing page for the Instagram project @psi.indica, in which the user can choose the type of content that they want to consume, so cards may be displayed correspondingly, including a random option.',
    stack: ['JavaScript', ' HTML', 'CSS'],
    image: psiIndica,
    imgST: psiIndicaST,
    slug: 'psiindica',
  },
];
