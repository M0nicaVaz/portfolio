import { Link, useLocation } from 'react-router-dom';

export function Card({ project }) {
  const { pathname } = useLocation();
  return (
    <Link to={`${pathname}/${project.id}`}>
      <li className="grid place-content-center px-4 w-72  rounded bg-gray-100 gap-2 hover:brightness-125 transition-all duration-300 lg:w-[420px] lg:py-4 lg:min-h-full h-fit py-4">
        <div className="w-full ">
          <img
            src={project.image}
            alt="Foto do projeto"
            className="w-full aspect-video"
          />
        </div>
        <span className="text-right ">{project.title}</span>
        <span className="text-center text-sm h-6 line-clamp-1 ">
          {project.description}
        </span>

        <div className="flex flex-wrap justify-end items-center gap-2">
          {project.stack.map((tag) => (
            <span className="py-1 px-2 text-right font-extralight text-blue text-sm bg-gray-200 rounded shadow-lg">
              {tag}
            </span>
          ))}
        </div>
      </li>
    </Link>
  );
}
