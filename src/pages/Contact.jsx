import { Header } from '../components/Header';
import { Main } from '../components/Main';

export function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-green-200 to-cyan-500">
          Contato
        </h1>
      </Main>
    </div>
  );
}
