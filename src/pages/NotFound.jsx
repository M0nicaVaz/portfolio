import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Player } from '../components/Player';

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col pb-4">
      <Header />
      <Main>
        <span className="place-self-center font-mono font-normal leading-loose text-2xl bg-clip-text selection:bg-purple-200 selection:text-yellow-100 text-rose-500 dark:text-blue-200">
          Oops, 404!
        </span>
        <span className="place-self-center font-normal leading-loose bg-clip-text text-base lg:text-xl text-center selection:bg-purple-200 selection:text-yellow">
          How did you get here? Would you like some music?
        </span>
        <Player />
      </Main>
    </div>
  );
}
