import { Home } from '../pages/Home';
import { Portfolio } from '../pages/Portfolio';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';
import { Project } from '../pages/Project';
import { DefaultLayout } from '../layout/DefaultLayout';

import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
