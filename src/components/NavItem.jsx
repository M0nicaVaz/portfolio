import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export function NavItem({ to: to, title }) {
  const { pathname } = useLocation();
  const isSelected = pathname === to;

  return (
    <Link
      to={to}
      className={classNames(
        'hover:text-teal dark:hover:text-yellow-200 transition-colors duration-300',

        {
          'text-purple-100 dark:text-blue-200': isSelected,
        }
      )}
    >
      <li className="font-mono text-base">
        <div className="group">
          <span
            className={classNames(
              'group-hover:text-yellow-100 dark:group-hover:text-purple-200 transition-colors duration-300',
              {
                'text-rose-400 dark:text-green': isSelected,
              }
            )}
          >
            &#123;
          </span>{' '}
          {title} {''}
          <span
            className={classNames(
              'group-hover:text-yellow-100 dark:group-hover:text-purple-200 transition-colors duration-300',
              {
                'text-rose-400 dark:text-green': isSelected,
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
