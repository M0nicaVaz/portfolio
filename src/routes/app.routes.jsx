import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';

import { Route, Routes } from 'react-router-dom';
import { Lesson } from '../pages/Lesson';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about/:id" element={<Lesson />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
