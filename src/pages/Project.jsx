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
            <h1 className="font-mono font-normal text-transparent pb-2 text-2xl bg-clip-text bg-gradient-to-r from-green to-blue lg:text-3xl  selection:text-yellow italic text-right">
              {project.title}
            </h1>

            <a href={project.live} target="_blank">
              <div className="flex flex-col items-center justify-center group">
                <TbWorld
                  size={22}
                  className="text-blue group-hover:text-green"
                />
                <span className="text-sm  text-blue group-hover:text-green">
                  live
                </span>
              </div>
            </a>

            <a href={project.github} target="_blank">
              <div className="flex flex-col items-center justify-center group">
                <FaGithub size={20} className="text-blue hover:text-green" />
                <span className="text-sm  text-blue group-hover:text-green">
                  repo
                </span>
              </div>
            </a>
          </div>

          <p className="max-w-screen-sm text-right text-base selection:text-yellow selection:bg-purple mb-10">
            {project.description}
          </p>

          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video lg:max-w-screen-sm"
          />
        </div>
      </Main>
    </div>
  );
}
