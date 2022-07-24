import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export function NavItem({ to: to, title }) {
  const { pathname } = useLocation();
  const isSelected = pathname === to;

  return (
    <Link
      to={to}
      className={classNames(
        'hover:text-yellow active:text-yellow transition-colors duration-300',

        {
          'text-blue ': isSelected,
        }
      )}
    >
      <li className="font-mono text-base">
        <div className="group">
          <span
            className={classNames(
              'group-hover:text-purple transition-colors duration-300',
              {
                'text-green ': isSelected,
              }
            )}
          >
            &#123;
          </span>{' '}
          {title} {''}
          <span
            className={classNames(
              'group-hover:text-purple transition-colors duration-300',
              {
                'text-green ': isSelected,
              }
            )}
          >
            &#125;
          </span>
        </div>
      </li>
    </Link>
  );
}
