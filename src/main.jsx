import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Emprestimo } from './pages/Emprestimo';


const rotas = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/emprestimo" element={<Emprestimo />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
