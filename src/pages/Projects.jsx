import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { LESSONS } from '../data';
import { Link, useLocation } from 'react-router-dom';

export function Projects() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-mono font-normal leading-loose text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue to-green h-24 italic selection:text-yellow lg:text-6xl">
          &#60;Projects&#47;&#62;
        </h1>

        <ul>
          {LESSONS.map((lesson) => (
            <li key={lesson.id}>
              <Link to={`${pathname}/${lesson.id}`}>{lesson.title}</Link>
            </li>
          ))}
        </ul>
      </Main>
    </div>
  );
}
