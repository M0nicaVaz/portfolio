import { Header } from '../components/Header';
import { Main } from '../components/Main';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-amber-200 to-cyan-300">
          Home
        </h1>
      </Main>
    </div>
  );
}
