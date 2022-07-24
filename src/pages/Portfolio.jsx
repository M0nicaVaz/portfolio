import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Card } from '../components/Card';
import { PROJECTS } from '../data';

export function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-mono font-normal text-transparent pb-2 text-4xl bg-clip-text bg-gradient-to-r from-yellow to-blue mb-4  lg:text-5xl  selection:text-yellow italic text-right">
          &#60;Projects&#62;
        </h1>

        <div className="flex flex-col h-[60vh] lg:h-[50vh] w-full">
          <ul className="leading-relaxed text-lg flex flex-wrap justify-center items-center overflow-x-auto gap-8 py-2">
            {PROJECTS.map((project) => (
              <Card project={project} key={project.id} />
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
