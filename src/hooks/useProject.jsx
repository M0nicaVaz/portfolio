import { useParams } from 'react-router-dom';
import { PROJECTS } from '../data';

export function useProject() {
  const slug = useParams().slug;

  return PROJECTS.filter((project) => project.slug == slug)[0];
}
