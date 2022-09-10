import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Player } from '../components/Player';
import { useTranslation } from 'react-i18next';

export function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col pb-4">
      <Header />
      <Main>
        <span className="place-self-center font-mono font-normal leading-loose text-2xl bg-clip-text selection:bg-purple-200 selection:text-yellow-100 text-rose-500 dark:text-blue-200">
          Oops, 404!
        </span>
        <span className="place-self-center font-normal leading-loose bg-clip-text text-base lg:text-xl text-center selection:bg-purple-200 selection:text-yellow">
          {t('notFound')}
        </span>
        <Player />
      </Main>
    </div>
  );
}
