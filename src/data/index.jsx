import rickandmorty from '../assets/rickandmorty.gif';
import rickandmortyST from '../assets/rickandmortyST.jpg';
import animeranking from '../assets/animeranking.gif';
import animerankingST from '../assets/animerankingST.jpg';
import mediaplayer from '../assets/mediaplayer.gif';
import mediaplayerST from '../assets/mediaplayerST.png';

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
      stack: ['Next', 'Typescript', 'TailwindCSS'],
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
      title: 'Media Player',
      github: 'https://github.com/M0nicaVaz/mediaPlayer',
      live: 'https://m0nicavaz.github.io/mediaPlayer/',
      description: t('project2.description'),
      stack: ['Javascript', 'HTML', 'CSS'],
      image: mediaplayer,
      imgST: mediaplayerST,
      slug: 'mediaplayer',
    },
  ];
}
