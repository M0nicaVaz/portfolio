import { Link } from 'react-router-dom';

export function NavItem({ to: to, title }) {
  return (
    <Link to={to} className="hover:text-blue active:text-yellow duration-300">
      <li className="font-mono text-sm lg:text-base">
        <div className="group">
          <span className="group-hover:text-green group-active:text-purple">
            &#123;
          </span>{' '}
          {title} {''}
          <span className="group-hover:text-green group-active:text-purple">
            &#125;
          </span>
        </div>
      </li>
    </Link>
  );
}
