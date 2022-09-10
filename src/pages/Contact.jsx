import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Form } from '../components/Form';
import { RiInformationFill } from 'react-icons/ri';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex order-1 mb-4  justify-center gap-2 lg:mb-0 lg:order-none lg:ml-1 lg:flex-col">
        <a href="https://linkedin.com/in/monica-vaz" target="_blank">
          <FaLinkedin
            size={32}
            className="text-rose-400 dark:text-blue-200 hover:text-purple-100 dark:hover:text-purple-200 transition-colors duration-300"
          />
        </a>
        <a href="https://github.com/m0nicavaz" target="_blank">
          <FaGithubSquare
            size={32}
            className="text-rose-400 dark:text-blue-200 hover:text-purple-100 dark:hover:text-purple-200 transition-colors duration-300"
          />
        </a>
      </div>

      <Main>
        <div className="group grid justify-center ">
          <div className="flex justify-self-end">
            <span className="opacity-0 group-hover:opacity-100 font-normal text-sm leading-relaxed transition-all duration-300">
              {t('contactPage.info')}
            </span>
            <RiInformationFill
              size={24}
              className="text-purple-100 dark:text-purple-200"
            />
          </div>
          <h1 className="font-mono font-normal pb-2 text-4xl lg:text-5xl mb-4 selection:text-yellow-100 dark:selection:text-yellow-200 italic text-right text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-purple-100 dark:from-blue-200 dark:to-purple-200">
            &#60;{t('contactPage.title')}&#62;
          </h1>
        </div>

        <Form />
      </Main>
    </div>
  );
}
