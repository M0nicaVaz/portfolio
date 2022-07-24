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
          bounds={{ top: -20, left: -20, right: 20, bottom: 20 }}
        >
          <div ref={nodeRef} className="mt-4 md:mt-0 group grid items-center">
            <div className="animate-disappear lg:animate-none justify-self-end flex justify-between w-[260px] lg:w-[420px]">
              <span className="mt-2 -rotate-12 transition-all duration-300 text-2xl  selection:text-yellow selection:bg-purple lg:opacity-0 lg:group-hover:opacity-100 lg:text-3xl lg:mb-2 ">
                Hi!
              </span>
              <span className="animate-wiggle-fast text-3xl transition-all duration-300 selection:text-yellow selection:bg-purple mb-1 lg:opacity-0 lg:group-hover:opacity-100 lg:animate-wiggle-infinite lg:mb-2 lg:text-4xl ">
                👋
              </span>
            </div>

            <h1 className="self-end text-right font-mono font-normal leading-relaxed text-transparent text-4xl bg-clip-text bg-gradient-to-br from-purple to-yellow italic mb-2 lg:animate-to-bottom cursor-grab active:cursor-grabbing  selection:text-yellow active:from-blue active:to-green lg:h-24 lg:text-6xl">
              &#60;Greetings&#47;&#62;
            </h1>
          </div>
        </Draggable>

        <span className="justify-self-end  text-xl leading-relaxed mb-2  selection:text-yellow selection:bg-purple ">
          I'm Monica
        </span>

        <span className="pl-2 font-light max-w-screen-sm text-right text-lg selection:text-yellow selection:bg-purple justify-self-end">
          I'm a Brazilian web developer, passionate about the client-side and
          building beautiful applications. At the moment, I'm dedicating my time
          to learning more about React. During my free time, I enjoy playing
          video games and watching anime. I also have a psychology degree!
        </span>

        <div className="flex mt-4 justify-end gap-2">
          <a href="https://linkedin.com/in/monica-vaz" target="_blank">
            <FaLinkedin
              size={30}
              className="text-blue hover:text-green transition-all duration-300 opacity-50 hover:opacity-80"
            />
          </a>
          <a href="https://github.com/m0nicavaz" target="_blank">
            <FaGithubSquare
              size={30}
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
              size={28}
              className="text-blue hover:text-green transition-all duration-300 opacity-50 hover:opacity-80"
            />
          </a>
        </div>
      </Main>
    </div>
  );
}
