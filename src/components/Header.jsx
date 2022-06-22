import { NavItem } from './NavItem';

export function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-6 bg-neutral-900 border-b border-neutral-700">
      <span className="text-4xl block text-cyan-400 ">Logo</span>

      <ul className="flex gap-5">
        <NavItem to="/">Página inicial</NavItem>
        <NavItem to="/about">Sobre</NavItem>
        <NavItem to="/contact">Contato</NavItem>
      </ul>
    </header>
  );
}
