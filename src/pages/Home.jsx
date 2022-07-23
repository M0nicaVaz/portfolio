import { Header } from '../components/Header';
import { Main } from '../components/Main';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <div className="group">
          <div className="flex justify-between">
            <span className="opacity-0 group-hover:opacity-100 text-4xl mb-2 -rotate-12 transition-all duration-300 selection:text-yellow selection:bg-purple">
              Hi!
            </span>
            <span className="opacity-0 group-hover:opacity-100 text-4xl  mb-2  animate-wiggle transition-all duration-300 selection:text-yellow selection:bg-purple">
              👋
            </span>
          </div>
          <h1 className="font-mono font-normal leading-loose text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue to-green h-24 italic selection:text-yellow lg:text-6xl">
            &#60;Greetings&#47;&#62;
          </h1>
        </div>

        <span className="justify-self-end text-xl leading-relaxed  selection:text-yellow selection:bg-purple  lg:text-2xl">
          I'm Monica
        </span>
        <span className="text-right  text-lg selection:text-yellow selection:bg-purple">
          I love building beautiful websites
        </span>
      </Main>
    </div>
  );
}
