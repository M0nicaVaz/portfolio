import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Card } from '../components/Card';
import { PROJECTS } from '../data';
import { Link, useLocation } from 'react-router-dom';

export function Portfolio() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-mono font-normal leading-loose text-transparent text-5xl bg-clip-text bg-gradient-to-r from-yellow to-blue h-24 italic justify-self-end selection:text-yellow lg:text-5xl">
          &#60;Projects&#62;
        </h1>

        <div className="flex flex-col h-[60vh] lg:h-[50vh] w-full">
          <ul className="leading-relaxed text-lg flex flex-wrap justify-center items-center overflow-x-auto gap-8 py-2">
            {PROJECTS.map((project) => (
              <Card project={project} />
            ))}
          </ul>
        </div>

        <span className="font-mono font-light text-2xl leading-loose text-transparent bg-clip-text bg-gradient-to-r from-yellow to-blue mt-2 justify-self-end opacity-70">
          &#60;&#47;&#62;
        </span>
      </Main>
    </div>
  );
}
