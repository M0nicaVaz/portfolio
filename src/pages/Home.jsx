import { Header } from '../components/Header';
import { Main } from '../components/Main';
import Draggable from 'react-draggable';
import { useRef } from 'react';

import { FaLinkedin, FaGithubSquare, FaFileDownload } from 'react-icons/fa';

export function Home() {
  const nodeRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <Draggable
          nodeRef={nodeRef}
          bounds={{ top: -180, left: -20, right: 20, bottom: 10 }}
        >
          <div ref={nodeRef} className="group grid items-center">
            <div className="justify-self-end flex justify-between w-[260px] lg:w-[420px]">
              <span className="mt-2 opacity-0 group-hover:opacity-100 text-3xl lg:mb-2 -rotate-12 transition-all duration-300 selection:text-yellow selection:bg-purple">
                Hi!
              </span>
              <span className="opacity-0 group-hover:opacity-100 text-4xl  lg:mb-2  animate-wiggle transition-all duration-300 selection:text-yellow selection:bg-purple mb-1">
                👋
              </span>
            </div>

            <h1 className="self-end text-right font-mono font-normal leading-relaxed text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue to-green italic mb-4 animate-to-bottom cursor-grab active:cursor-grabbing  selection:text-yellow active:from-purple active:to-yellow lg:h-24 lg:text-6xl">
              &#60;Greetings&#47;&#62;
            </h1>
          </div>
        </Draggable>

        <span className="justify-self-end text-lg lg:text-xl leading-relaxed mb-4  selection:text-yellow selection:bg-purple ">
          I'm Monica
        </span>

        <span className="pl-2  max-w-screen-sm text-right text-base selection:text-yellow selection:bg-purple">
          I'm a brazilian web developer, passionate about the client-side and
          building beautiful applications. I really enjoy chatting about code,
          anime and videogames. I also have a psychology degree, in love with
          behavioral science.
        </span>

        <div className="flex mt-4 justify-end gap-2">
          <a href="https://linkedin.com/in/monica-vaz" target="_blank">
            <FaLinkedin
              size={28}
              className="text-blue hover:text-green transition-all duration-300 opacity-50 hover:opacity-80"
            />
          </a>
          <a href="https://github.com/m0nicavaz" target="_blank">
            <FaGithubSquare
              size={28}
              className="text-blue hover:text-green transition-all duration-300 opacity-50 hover:opacity-80"
            />
          </a>
          <a
            href={
              'https://drive.google.com/uc?export=download&id=18M0IIVqNvt8Aor-pEWW2UXD-XOI1gr19'
            }
            target="_blank"
          >
            <FaFileDownload
              size={26}
              className="text-blue hover:text-green transition-all duration-300 opacity-50 hover:opacity-80"
            />
          </a>
        </div>
      </Main>
    </div>
  );
}
