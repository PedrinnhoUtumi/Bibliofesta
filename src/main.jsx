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
import { Emprestimo3 } from './pages/Emprestimo3';
import { Usuario } from './pages/Usuario';
import { DadosProvider } from './context/DadosContext';

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/emprestimo" element={<Emprestimo />} />
      <Route path='/usuario' element={<Usuario/>}/> 
      <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
      <Route path="/cadastroLivro" element={<CadastroLivro />} />
      <Route path="/gerenciarDividas" element={<GerenciarDividas />} />
      <Route path="/emprestimo2" element={<Emprestimo2/>}/>
      <Route path="/emprestimo3" element={<Emprestimo3/>}/>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DadosProvider>
      <RouterProvider router={rotas} />
    </DadosProvider>
  </StrictMode>
);
