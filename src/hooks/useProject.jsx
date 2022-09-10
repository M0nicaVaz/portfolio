import { useParams } from 'react-router-dom';
import { ProjectData } from '../data';

export function useProject() {
  const slug = useParams().slug;

  const projects = ProjectData();

  return projects.filter((project) => project.slug == slug)[0];
}
