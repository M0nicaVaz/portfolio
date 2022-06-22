import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { LESSONS } from '../data';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function About() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-cyan-200 to-fuchsia-500">
          Sobre
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
