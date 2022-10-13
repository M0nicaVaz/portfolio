import { Link, useLocation } from 'react-router-dom';

export function Card({ project }) {
  const { pathname } = useLocation();

  function handleMouseOver(e) {
    const img = e.currentTarget.children[0];

    img.src = project.image;

    return null;
  }

  function handleMouseOut(e) {
    const img = e.currentTarget.children[0];

    img.src = project.imgST;

    return null;
  }

  return (
    <Link to={`${pathname}/${project.slug}`}>
      <li
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="grid place-content-center px-4 w-72  rounded bg-gray-200/10 dark:bg-gray-200 gap-2 hover:brightness-125 transition-all duration-300 lg:w-[420px] lg:py-4 lg:min-h-full h-fit py-4"
      >
        <img
          src={project.imgST}
          alt="Foto do projeto"
          className="w-full aspect-video"
        />

        <span className="text-right ">{project.title}</span>
        <span className="text-center text-sm h-6 line-clamp-1 ">
          {project.description}
        </span>

        <div className="flex flex-wrap justify-end items-center gap-2">
          {project.stack.map((tag, index) => (
            <span
              key={index}
              className="py-1 px-2 text-right font-extralight text-rose-200 bg-gray-700 dark:text-blue-200 text-sm rounded shadow-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </li>
    </Link>
  );
}
