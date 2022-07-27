import { NavItem } from './NavItem';
import { TbSunOff, TbSun } from 'react-icons/tb';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full flex items-center justify-between text-right py-4 px-6">
      <button>
        {theme === 'dark' ? (
          <TbSun
            onClick={() => {
              setTheme('light');
            }}
            size={26}
            className="text-yellow-200 opacity-80"
          />
        ) : (
          <TbSunOff
            onClick={() => {
              setTheme('dark');
            }}
            size={26}
            className="text-black opacity-80"
          />
        )}
      </button>
      <ul className="flex flex-col gap-2  selection:bg-purple-100 selection:text-yellow-200 lg:flex-row lg:gap-5 ">
        <NavItem to="/" title="AboutMe" />
        <NavItem to="/portfolio" title="Projects" />
        <NavItem to="/contact" title="Contact" />
      </ul>
    </header>
  );
}
