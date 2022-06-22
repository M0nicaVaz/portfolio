import { Header } from '../components/Header';
import { Main } from '../components/Main';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-orange-300 to-red-400">
          OOPS!
        </h1>
        <span className="block">Página não encontrada. </span>
      </Main>
    </div>
  );
}
