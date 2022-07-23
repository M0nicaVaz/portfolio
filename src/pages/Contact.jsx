import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { RiInformationFill } from 'react-icons/ri';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex">
        <div className="flex flex-col mb-6 ml-1 justify-center gap-2">
          <a href="https://linkedin.com/in/monica-vaz" target="_blank">
            <FaLinkedin size={32} className="text-blue " />
          </a>
          <a href="https://github.com/m0nicavaz" target="_blank">
            <FaGithubSquare size={32} className="text-blue " />
          </a>
        </div>

        <Main className="flex flex-1">
          <div className="group grid">
            <div className="flex justify-self-end">
              <span className="opacity-0 group-hover:opacity-100 font-normal text-sm leading-relaxed transition-all duration-300 ">
                Always open!
              </span>
              <RiInformationFill size={24} className="text-purple " />
            </div>
            <h1 className="font-mono font-normal text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue to-purple mb-4  selection:text-yellow italic text-center">
              &#60;Contact&#62;
            </h1>
          </div>

          <form className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Nome"
              className="bg-gray rounded p-2 w-72 text-blue selection:bg-green selection:text-gray"
            />

            <input
              type="text"
              placeholder="Email"
              className="bg-gray rounded p-2 w-72 text-blue selection:bg-green  selection:text-gray"
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="bg-gray rounded p-2 w-72 resize-none text-blue selection:bg-green  selection:text-gray"
            ></textarea>
            <button
              className="border-blue text-blue border hover:bg-gradient-to-r hover:text-neutral-900 font-medium hover:border-inherit from-blue to-purple rounded p-2 w-72 transition-all duration-200"
              type="button"
            >
              Enviar
            </button>
          </form>
        </Main>
      </div>
    </div>
  );
}
