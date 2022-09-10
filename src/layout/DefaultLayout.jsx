import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function DefaultLayout() {
  return (
    <div className="min-h-screen flex flex-col max-w-screen-2xl m-auto">
      <Header />
      <Outlet />
    </div>
  );
}
