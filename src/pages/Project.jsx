import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { useLesson } from '../hooks/useLesson';

export function Project() {
  const lesson = useLesson();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Main>
        <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-blue-200 to-green-500">
          Detalhes
        </h1>

        <div className="text-center">
          <p>{lesson.title}</p>
          <p>{lesson.description}</p>
        </div>
      </Main>
    </div>
  );
}
