import { NavItem } from './NavItem';

export function Header() {
  return (
    <header className="w-full flex items-center justify-end py-4 px-6 bg-neutral-900">
      <ul className="flex gap-5 selection:bg-yellow selection:text-purple">
        <NavItem to="/" title="AboutMe" />
        <NavItem to="/portfolio" title="Portfolio" />
        <NavItem to="/contact" title="Contact" />
      </ul>
    </header>
  );
}
