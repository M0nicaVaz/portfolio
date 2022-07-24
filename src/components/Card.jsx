import { Link, useLocation } from 'react-router-dom';

export function Card({ project }) {
  const { pathname } = useLocation();
  return (
    <Link to={`${pathname}/${project.id}`}>
      <li className="grid place-content-center px-4 w-72 h-64 rounded bg-gray-100 gap-4 lg:w-[420px] lg:py-4 lg:h-full">
        <div className="w-full ">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-video"
          />
        </div>
        <span className="text-right">{project.title}</span>

        <div className="flex justify-end items-center gap-2">
          {project.stack.map((tag) => (
            <span className="py-1 px-2 text-right text-sm bg-gray-200 rounded shadow-lg">
              {tag}
            </span>
          ))}
        </div>
      </li>
    </Link>
  );
}
