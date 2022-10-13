import rickandmorty from '../assets/rickandmorty.gif';
import rickandmortyST from '../assets/rickandmortyST.jpg';
import gitfav from '../assets/gitfav.jpg';
import animeranking from '../assets/animeranking.gif';
import animerankingST from '../assets/animerankingST.jpg';
import explorer from '../assets/explorer.gif';
import psiIndica from '../assets/psiindica.gif';
import classroom from '../assets/classroom.gif';
import explorerST from '../assets/explorerST.jpg';
import psiIndicaST from '../assets/psiindicaST.jpg';
import classroomST from '../assets/classroomST.jpg';
import { useTranslation } from 'react-i18next';

export function ProjectData() {
  const { t } = useTranslation();

  return [
   
    {
      id: 0,
      title: 'Rick and Morty Guide',
      github: 'https://github.com/M0nicaVaz/rick-and-morty',
      live: 'https://rick-and-morty-guide.vercel.app//',
      description: t('project0.description'),
      stack: ['Next', 'React', 'Typescript', 'Tailwind'],
      image: rickandmorty,
      imgST: rickandmortyST,
      slug: 'rickandmorty',
    },
    {
      id: 1,
      title: 'Anime Ranking',
      github: 'https://github.com/M0nicaVaz/animeranking',
      live: 'https://animeranking.vercel.app/',
      description: t('project1.description'),
      stack: ['React', 'Styled-Components', 'Knex', 'Node', ' SQL'],
      image: animeranking,
      imgST: animerankingST,
      slug: 'animeranking',
    },
    {
      id: 2,
      title: 'Classroom Environment',
      github: 'https://github.com/M0nicaVaz/classroom-platform',
      live: 'https://classroom-platform.vercel.app/',
      description: t('project2.description'),
      stack: ['React', 'TypeScript', 'GraphCMS', 'Apollo', 'Tailwind'],
      image: classroom,
      imgST: classroomST,
      slug: 'classroom',
    },

    {
      id: 3,
      title: 'Explorer Portfolio',
      github: 'https://github.com/M0nicaVaz/explorer',
      live: 'https://m0nicavaz.github.io/explorer/',
      description: t('project3.description'),
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
      description: t('project4.description'),
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
      description: t('project5.description'),
      stack: ['JavaScript', ' HTML', 'CSS'],
      image: psiIndica,
      imgST: psiIndicaST,
      slug: 'psiindica',
    },
  ];
}
