import { NavItem } from './NavItem';

export function Header() {
  return (
    <header className="w-full flex items-center justify-end text-right py-4 px-6 bg-neutral-900">
      <ul className="flex flex-col gap-2 selection:bg-yellow selection:text-purple lg:flex-row lg:gap-5 ">
        <NavItem to="/" title="AboutMe" />
        <NavItem to="/portfolio" title="Portfolio" />
        <NavItem to="/contact" title="Contact" />
      </ul>
    </header>
  );
}
