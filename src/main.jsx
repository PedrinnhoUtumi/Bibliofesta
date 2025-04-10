import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { Emprestimo } from './pages/Emprestimo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
    
  </StrictMode>,
)
