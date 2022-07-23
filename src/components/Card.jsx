import { Link, useLocation } from 'react-router-dom';

export function Card({ project }) {
  const { pathname } = useLocation();
  return (
    <Link to={`${pathname}/${project.id}`}>
      <li
        className="grid place-content-center px-12 w-80 lg:w-[420px] h-72 rounded bg-gray-100 gap-4"
        key={project.id}
      >
        <div className="px-36 lg:px-48 h-40 bg-blue"> </div>
        <span className="text-right">{project.title}</span>
        <div className="flex justify-between">
          <span className="w-full text-right">tag1</span>
          <span className="w-full text-right">tag1</span>
          <span className="w-full text-right">tag1</span>
        </div>
      </li>
    </Link>
  );
}
