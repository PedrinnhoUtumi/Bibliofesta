import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'
import { useState } from "react";
import bcrypt from 'bcryptjs'



export function Cadastro() {
    const [novoUsuario, setNovoUsuario] = useState({ nome: "", senha: ""});
    const [usuario, setUsuario] = useState([]);
    const [senha, setSenha] = useState("");

    const verificarLogin = async () => {
        const usuarioEncontrado = usuario.find((user) => user.email === email);
        if (usuarioEncontrado) {
          console.log("Usuário encontrado:", usuarioEncontrado);
          
          const isCorrect = await bcrypt.compare(senha, usuarioEncontrado.senha);
      
          if (isCorrect) {  
            console.log("tudo correto");
            
          } else {
            alert("Senha incorreta!");
          }
        } else {
          alert("Usuário ou senha inválidos!");
        }
      };

    async function criarUsuario(e) {
        e.preventDefault();
        try {
          if (!novoUsuario.nome || !novoUsuario.senha) {
            alert("Preencha todos os campos!")
            return
          }
          
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(novoUsuario.senha, salt);
          const usuarioParaEnviar = {
            ...novoUsuario,
            senha: hash,
          };
          console.log(novoUsuario)
    
          const response = await fetch(`http://127.0.0.1/cadastrar`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(usuarioParaEnviar),
          })
    
          if (!response.ok) {
              throw new Error(`Erro ao criar usuário: ${response.statusText}`)
          }
    
    
          const dados = await response.json()
          console.log(dados)
    
    
          setNovoUsuario({ nome: "", senha: ""})
          } catch (error) {
          console.error(error)
        }
      }
    return (
        <Pagina>
            <div className="flex flex-row h-screen font-poppins w-screen"> 
                <aside className="bg-[#FFAA00] flex flex-col w-5xl h-screen items-center justify-center">
                    <img src={imagemLogin} alt='login' className='w-3xl'/>
                </aside>
               
                <div className="flex-1 p-8 flex flex-col items-center justify-center w-xl">
                    <form className="flex flex-col items-center justify-center rounded-2xl shadow-2xl p-10 w-96">
                        <header className="w-full flex justify-center items-start mb-8">
                            <h1 className="text-5xl"><strong>BIBLIOFESTA</strong></h1>
                        </header>
                        <div className="flex flex-col items-center mb-4 w-64">
                            <label htmlFor="login" className="text-2xl self-start">Login:</label>
                            <input id="login" type="text" value={novoUsuario.nome} onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })} className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <div className="flex flex-col items-center mb-4 w-64">
                            <label htmlFor="senha" className="text-2xl self-start">Senha:</label>
                            <input id="senha" type="password" className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <div className="flex flex-col items-center mb-4 w-64">
                            <label htmlFor="senha" className="text-2xl self-start">Confirmar Senha:</label>
                            <input id="senha" type="password" value={novoUsuario.senha} onChange={(e) => setNovoUsuario({ ...novoUsuario, senha: e.target.value })} className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <button className="bg-[#FFAA00] h-10 mt-4 rounded-3xl w-36 cursor-pointer" onClick={criarUsuario} type="submit"><strong>Cadastrar</strong></button>
                    </form>
                </div>
            </div>
        </Pagina>
    );
}
