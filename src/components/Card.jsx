import { Link, useLocation } from 'react-router-dom';

export function Card({ project }) {
  const { pathname } = useLocation();
  return (
    <Link to={`${pathname}/${project.id}`}>
      <li className="grid place-content-center px-12 w-72 lg:w-[420px] h-72 rounded bg-gray-100 gap-4">
        <div className="w-full lg:px-48 h-40 bg-blue"> </div>
        <span className="text-right">{project.title}</span>

        <div className="flex justify-end gap-2">
          {project.stack.map((tag) => (
            <span className="p-1 text-right text-sm bg-gray-200 rounded shadow-lg">
              {tag}
            </span>
          ))}
        </div>
      </li>
    </Link>
  );
}
