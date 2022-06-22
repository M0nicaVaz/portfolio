import { Link } from 'react-router-dom';

export function NavItem({ to: to, children }) {
  return (
    <Link to={to} className="hover:text-cyan-200 duration-300">
      <li className="text-sm">{children}</li>
    </Link>
  );
}
