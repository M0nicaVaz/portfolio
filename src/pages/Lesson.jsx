import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { LESSONS } from '../data';

export function Lesson({ lesson }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-200 to-green-500">
          Detalhes
        </h1>

        <div className="text-center">
          <p>Titulo</p>
          <p>Descrição</p>
        </div>
      </Main>
    </div>
  );
}
