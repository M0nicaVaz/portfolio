import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { RiInformationFill } from 'react-icons/ri';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <div className="flex order-1 mb-4  justify-center gap-2 lg:mb-0 lg:order-none lg:ml-1 lg:flex-col">
          <a href="https://linkedin.com/in/monica-vaz" target="_blank">
            <FaLinkedin
              size={32}
              className="text-blue hover:text-purple transition-colors duration-300"
            />
          </a>
          <a href="https://github.com/m0nicavaz" target="_blank">
            <FaGithubSquare
              size={32}
              className="text-blue hover:text-purple transition-colors duration-300"
            />
          </a>
        </div>

        <Main>
          <div className="group grid justify-center ">
            <div className="flex justify-self-end">
              <span className="opacity-0 group-hover:opacity-100 font-normal text-sm leading-relaxed transition-all duration-300 ">
                Always open!
              </span>
              <RiInformationFill size={24} className="text-purple " />
            </div>
            <h1 className="font-mono font-normal text-transparent pb-2 text-4xl lg:text-5xl bg-clip-text bg-gradient-to-br from-blue to-purple mb-4  selection:text-yellow italic text-right">
              &#60;Contact&#62;
            </h1>
          </div>

          <form className="flex flex-col gap-2 items-center">
            <input
              type="text"
              placeholder="Nome"
              className="bg-gray-200 rounded p-2 w-72 lg:w-96 text-blue selection:bg-purple"
            />

            <input
              type="text"
              placeholder="Email"
              className="bg-gray-200 rounded p-2 w-72 lg:w-96 text-blue selection:bg-purple"
            />

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="bg-gray-200 rounded p-2 w-72 lg:w-96 resize-none text-blue selection:bg-purple"
            ></textarea>
            <button
              className="border-blue text-blue border hover:bg-gradient-to-r hover:text-neutral-900 font-medium hover:border-inherit from-blue to-purple rounded p-2 w-72 mb-6 lg:w-96 transition-all duration-200 selection:text-yellow"
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
