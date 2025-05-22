import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Emprestimo } from './pages/Emprestimo';
import { GerenciarDividas } from './pages/GerenciarDividas';
import { CadastroLivro } from './pages/CadastroLivro';
import { CadastroUsuario } from './pages/CadastroUsuario';
import { Emprestimo2 } from './pages/Emprestimo2';

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/emprestimo" element={<Emprestimo />} />
      <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
      <Route path="/cadastroLivro" element={<CadastroLivro />} />
      <Route path="/gerenciarDividas" element={<GerenciarDividas />} />
      <Route path="/emprestimo2" element={<Emprestimo2/>}/>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
