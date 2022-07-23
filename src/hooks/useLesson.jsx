import { useParams } from 'react-router-dom';
import { LESSONS } from '../data';

export function useLesson() {
  const id = useParams().id;

  return LESSONS.filter((lesson) => lesson.id == id)[0];
}
