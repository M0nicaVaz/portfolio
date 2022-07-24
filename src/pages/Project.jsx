import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { useProject } from '../hooks/useProject';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

export function Project() {
  const project = useProject();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <div className="grid place-content-center">
          <div className="flex gap-2 mb-2 justify-between items-center justify-self-end">
            <h1 className="font-mono font-normal text-transparent pb-2 text-2xl bg-clip-text bg-gradient-to-br from-yellow to-blue lg:text-3xl  selection:text-yellow text-right">
              {project.title}
            </h1>

            <a href={project.github} target="_blank">
              <span className="text-sm flex flex-col items-center justify-center group text-blue hover:text-yellow">
                <FaGithub size={20} />
                repo
              </span>
            </a>
            <a href={project.live} target="_blank">
              <span className="text-sm flex flex-col items-center justify-center group text-blue hover:text-green">
                <TbWorld size={22} />
                live
              </span>
            </a>
          </div>

          <p className="max-w-screen-sm text-right text-base selection:text-yellow selection:bg-purple mb-4 justify-self-end">
            {project.description}
          </p>

          <div className="flex flex-wrap justify-end items-center gap-2 mb-4">
            <span className="font-mono font-extralight text-blue">
              Tech Stack:
            </span>
            {project.stack.map((tag) => (
              <span className="pr-2 text-right font-extralight  text-sm shadow-lg border-r border-blue border- last:border-0">
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
