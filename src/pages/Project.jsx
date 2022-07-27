import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { useProject } from '../hooks/useProject';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

export function Project() {
  const project = useProject();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br pb-2">
      <Header />

      <Main>
        <div className="grid place-content-center">
          <div className="flex gap-2 mb-2 justify-between items-center justify-self-end">
            <h1 className="font-mono font-normal text-transparent pb-2 text-2xl bg-clip-text bg-gradient-to-br from-yellow-100 to-rose-400 dark:from-yellow-200 dark:to-blue-200 lg:text-3xl  selection:text-teal dark:selection:text-yellow-200   text-right">
              {project.title}
            </h1>

            <a href={project.github} target="_blank">
              <span className="text-sm flex flex-col items-center justify-center group  text-rose-400 dark:text-blue-200 hover:text-purple-100 dark:hover:text-yellow-200 transition-colors duration-300">
                <FaGithub size={20} />
                repo
              </span>
            </a>
            <a href={project.live} target="_blank">
              <span
                className="text-sm flex flex-col items-center justify-center group
              text-rose-400 dark:text-blue-200 hover:text-teal dark:hover:text-green transition-colors duration-300"
              >
                <TbWorld size={22} />
                live
              </span>
            </a>
          </div>

          <p className="max-w-screen-sm text-right text-base selection:text-yellow-200 selection:bg-purple-100 mb-4 justify-self-end ">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-end items-center gap-2 mb-4">
            <span className="font-mono font-light dark:font-extralight text-rose-500  dark:text-blue-200 selection:bg-purple-100 selection:text-yellow-200">
              Tech Stack:
            </span>
            {project.stack.map((tag, index) => (
              <span
                key={index}
                className="pr-2 text-right font-light dark:font-extralight text-sm border-r border-rose-400 dark:border-blue-200 border- last:border-0 selection:bg-purple-100 selection:text-yellow-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video md:max-w-screen-sm"
          />
        </div>
      </Main>
    </div>
  );
}
