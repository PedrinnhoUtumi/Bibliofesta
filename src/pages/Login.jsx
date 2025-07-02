import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'
import { Link, useNavigate } from "react-router-dom"
import { Menu } from "../components/Menu";
import { useContext, useState } from "react";
import { DadosContext } from "../context/DadosContext";
import bcrypt from 'bcryptjs'

export function Login() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const {dados, adicionarDados} = useContext(DadosContext)
    const navigate = useNavigate()
    const verificarLogin = async () => {
        
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(senha, salt);
        console.log(hash)
        for (let i = 0; i < dados.bibliotecario.length; i++){
            const senhaCorreta = bcrypt.compare(hash, dados.bibliotecario[i].senha)
            
            if (login === dados.bibliotecario[i].nomebibliotecario && senhaCorreta){
                console.log("arrasou");
                navigate("/emprestimo")
                
            } else {
                console.log("Tentaiva", i);
                
                console.log(login);
                console.log(hash);
                console.log(dados.bibliotecario[i].nomebibliotecario);
                console.log(dados.bibliotecario[i].senha);
                
            }
        }
        
    };
    return (
        <Pagina>
            <div className="flex flex-row min-h-screen font-poppins w-screen">
                <aside className="hidden sm:flex flex-col w-[70%] h-screen bg-[#FFAA00] min-w-[350px] items-center justify-center">
                    <img src={imagemLogin} alt='login' className='w-3xl' />
                </aside>
                {/* <Menu/> */}
                <div className="h-screen flex-1 flex items-center justify-center max-w-full max-h-full p-8 ">
                    <div className="flex flex-col items-center justify-center rounded-2xl shadow-2xl p-10">
                        <header className="w-full flex justify-center items-start mb-8">
                            <h1 className="text-5xl"><strong>BIBLIOFESTA</strong></h1>
                        </header>
                        <div className="flex flex-col items-center mb-4 w-64">
                            <label htmlFor="login" className="text-2xl self-start">Login:</label>
                            <input id="login" type="text" className="bg-white m-2 rounded-3xl h-8 text-black w-64" value={login} onChange={(e) => setLogin(e.target.value)} />
                        </div>
                        <div className="flex flex-col items-center mb-4 w-64">
                            <label htmlFor="senha" className="text-2xl self-start" >Senha:</label>
                            <input id="senha" type="password" className="bg-white m-2 rounded-3xl h-8 text-black w-64" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <button className="bg-[#FFAA00] h-10 mt-4 rounded-3xl w-36 cursor-pointer" onClick={verificarLogin}><strong>Enviar</strong></button>
                        <Link to='/cadastro'>Não tem conta? Cadastre-se agora</Link>
                    </div>
                </div>

            </div>
        </Pagina>
    );
}
