import { Link, useLocation } from 'react-router-dom';

export function Card({ project }) {
  const { pathname } = useLocation();

  function handleMouseOver(e) {
    const img = e.currentTarget.children[0];
    return img.src = project.image;

  }

  function handleMouseOut(e) {
    const img = e.currentTarget.children[0];
    return img.src = project.imgST;
  }

  return (
    <Link to={`${pathname}/${project.slug}`}>
      <li
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="grid px-4 w-72 rounded bg-gray-200/10 dark:bg-gray-200 gap-2 hover:brightness-125 min-h-[318px] transition-all duration-300 xl:w-[420px] xl:py-4 xl:min-h-full h-fit py-4"
      >
        <img
          src={project.imgST}
          alt="Foto do projeto"
          className="w-full aspect-video"
        />

        <div className='flex flex-col gap-1'>
          <span className="text-right ">{project.title}</span>
          <span className="text-center text-sm h-6 line-clamp-1">
            {project.description}
          </span>
        </div>

        <div className=" flex flex-wrap justify-end items-center gap-2">
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
