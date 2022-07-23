import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { useProject } from '../hooks/useProject';

export function Project() {
  const project = useProject();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-200 to-green-500">
          Detalhes
        </h1>

        <div className="text-center">
          <p>{project.title}</p>
          <p>{project.description}</p>
        </div>
      </Main>
    </div>
  );
}
