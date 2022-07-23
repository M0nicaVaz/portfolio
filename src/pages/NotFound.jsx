import { Header } from '../components/Header';
import { Main } from '../components/Main';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main>
        <strong className="font-mono font-normal leading-loose text-transparent text-xl bg-clip-text bg-gradient-to-r from-blue to-green h-24 lg:text-2xl cursor-pointer  selection:bg-purple selection:text-yellow">
          Oops! Página não encontrada.
        </strong>
      </Main>
    </div>
  );
}
