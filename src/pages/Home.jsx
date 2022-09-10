import { Header } from '../components/Header';
import { Main } from '../components/Main';
import Draggable from 'react-draggable';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { FaLinkedin, FaGithubSquare, FaFileDownload } from 'react-icons/fa';

export function Home() {
  const nodeRef = useRef(null);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <Draggable
          nodeRef={nodeRef}
          bounds={{ top: -20, left: -20, right: 20, bottom: 20 }}
        >
          <div ref={nodeRef} className="mt-4 md:mt-0 group grid items-center">
            <div className="animate-disappear lg:animate-none justify-self-end flex justify-between w-[260px] lg:w-[420px]">
              <span className="mt-2 -rotate-12 transition-all duration-300 text-2xl  selection:text-yellow-200 selection:bg-purple-100 lg:opacity-0 lg:group-hover:opacity-100 lg:text-3xl lg:mb-2 ">
                {t('homePage.greeting')}
              </span>
              <span className="animate-wiggle-fast text-3xl transition-all duration-300 selection:text-yellow-200 selection:bg-purple-100 mb-1 lg:opacity-0 lg:group-hover:opacity-100 lg:animate-wiggle-infinite lg:mb-2 lg:text-4xl ">
                👋
              </span>
            </div>

            <h1 className="self-end text-right font-mono font-normal leading-relaxed text-4xl italic mb-2 cursor-grab active:cursor-grabbing  selection:text-yellow-100 lg:h-24 lg:text-6xl lg:animate-to-bottom text-transparent  bg-clip-text bg-gradient-to-br from-purple-100 to-orange dark:from-purple-200 dark:to-yellow-200  dark:selection:text-yellow-200">
              &#60;Greetings&#47;&#62;
            </h1>
          </div>
        </Draggable>

        <span className="justify-self-end  text-xl leading-relaxed mb-2  selection:text-yellow-200 selection:bg-purple-100">
          {t('homePage.subtitle')}
        </span>

        <span className="pl-2 font-normal dark:font-light max-w-screen-sm text-right text-lg selection:text-yellow-200 selection:bg-purple-100 justify-self-end">
          {t('homePage.description')}
        </span>

        <div className="flex mt-4 justify-end gap-2">
          <a href="https://linkedin.com/in/monica-vaz" target="_blank">
            <FaLinkedin
              size={30}
              className="hover:opacity-70 text-cyan-700 dark:text-blue-200 dark:hover:text-green transition-all duration-300 dark:opacity-50 dark:hover:opacity-80"
            />
          </a>
          <a href="https://github.com/m0nicavaz" target="_blank">
            <FaGithubSquare
              size={30}
              className="hover:opacity-70 text-cyan-700 dark:text-blue-200 dark:hover:text-green transition-all duration-300 dark:opacity-50 dark:hover:opacity-80"
            />
          </a>
          <a
            href={
              'https://drive.google.com/uc?export=download&id=1pw4SBlQFvTNYTvfwjYQBDp_dxJ9gK9Fm'
            }
            target="_blank"
          >
            <FaFileDownload
              size={28}
              className="hover:opacity-70 text-cyan-700   dark:text-blue-200 dark:hover:text-green transition-all duration-300 dark:opacity-50 dark:hover:opacity-80"
            />
          </a>
        </div>
      </Main>
    </div>
  );
}
