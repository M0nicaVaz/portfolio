import { Main } from '../components/Main';
import { Card } from '../components/Card';
import { ProjectData } from '../data';
import { SiTailwindcss, SiReact } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export function Portfolio() {
  const { t } = useTranslation();

  const projects = ProjectData();
  return (
    <Main>
      <h1 className="text-right font-mono font-normal leading-loose text-4xl pb-4 italic lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-rose-400 dark:from-yellow-200 dark:to-blue-200">
        &#60;{t('projectsPage.title')} &#62;
      </h1>

      <div className="flex flex-col h-[60vh] lg:h-[50vh] w-full">
        <ul className="leading-relaxed text-lg flex flex-wrap justify-center items-center overflow-x-auto gap-8 py-2">
          {projects.map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </ul>
      </div>
      <span className="font-mono font-light text-2xl leading-loose text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 to-rose-400  dark:from-yellow-200 dark:to-blue-200 mt-2 justify-self-end opacity-70">
        &#60;&#47;&#62;
      </span>

      <footer className="w-full pt-8 pb-8 lg:pb-0 lg:pt-6 flex items-center justify-center lg:justify-end opacity-50">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="ml-6 text-xs dark:font-extralight">
              &#123; {t('projectsFooter.0')}
            </span>
            <SiReact
              size={16}
              className="inline text-blue-100 dark:text-blue-200"
            />
            <SiTailwindcss
              size={16}
              className="inline text-blue-100 dark:text-blue-200"
            />
          </div>

          <span className=" gap-2 ml-6 text-xs dark:font-extralight text-center lg:text-right lg:self-end">
            {t('projectsFooter.1')}
            <a
              target="_blank"
              href="https://github.com/M0nicaVaz/portfolio"
              className="text-blue-100 dark:text-blue-200 hover:text-orange dark:hover:text-rose-100"
            >
              {t('projectsFooter.2')}
            </a>
            */&#125;
          </span>
        </div>
      </footer>
    </Main>
  );
}
