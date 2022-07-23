import { useParams } from 'react-router-dom';
import { PROJECTS } from '../data';

export function useProject() {
  const id = useParams().id;

  return PROJECTS.filter((project) => project.id == id)[0];
}
