import { NavItem } from './NavItem';
import { TbSunOff, TbSun } from 'react-icons/tb';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import brflag from '../assets/brflag.svg';
import usflag from '../assets/usflag.svg';

export function Header() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [flag, setFlag] = useState(usflag);

  function switchLanguage() {
    if (i18n.language === 'en') {
      i18n.changeLanguage('pt');
      setFlag(usflag);
    } else {
      i18n.changeLanguage('en');
      setFlag(brflag);
    }
  }

  function switchTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  return (
    <header className="w-full flex items-center justify-between text-right py-4 px-6">
      <div className="flex gap-2 items-center flex-col lg:flex-row">
        <button onClick={switchLanguage}>
          <img src={flag} className="w-5 h-5 rounded" />
        </button>

        <button onClick={switchTheme}>
          {theme === 'dark' ? (
            <TbSun size={26} className="text-yellow-200 opacity-80" />
          ) : (
            <TbSunOff size={26} className="text-black opacity-80" />
          )}
        </button>
      </div>

      <ul className="flex flex-col gap-2  selection:bg-purple-100 selection:text-yellow-200 lg:flex-row lg:gap-5 ">
        <NavItem to="/" title={t('navbar.0')} />
        <NavItem to="/portfolio" title={t('navbar.1')} />
        <NavItem to="/contact" title={t('navbar.2')} />
      </ul>
    </header>
  );
}
