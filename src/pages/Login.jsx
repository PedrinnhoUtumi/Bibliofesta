import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'
import { Link, useNavigate } from "react-router-dom"
import { Menu } from "../components/Menu";
export function Login() {
    // const verificarLogin = async () => {
    //     const usuarioEncontrado = usuario.find((user) => user.email === email);
    //     if (usuarioEncontrado) {
    //         console.log("Usuário encontrado:", usuarioEncontrado);
            
    //         const senhaCorreta = await bcrypt.compare(senha, usuarioEncontrado.senha);
        
    //         if (senhaCorreta) {  
    //         console.log("tudo correto");
            
    //         } else {
    //         alert("Senha incorreta!");
    //         }
    //     } else {
    //         alert("Usuário ou senha inválidos!");
    //     }
    //     };
    return (
        <Pagina>
            <div className="flex flex-row h-screen font-poppins w-screen">
                <aside className="bg-[#FFAA00] flex flex-col w-[70%] h-screen items-center justify-center">
                    <img src={imagemLogin} alt='login' className='w-3xl' />
                </aside>
                {/* <Menu/> */}
                <div className="w-[30%] h-screen flex items-center justify-center p-8 ">
                    <form className="flex flex-col items-center justify-center rounded-2xl shadow-2xl p-10">
                        <header className="w-full flex justify-center items-start mb-8">
                            <h1 className="text-5xl"><strong>BIBLIOFESTA</strong></h1>
                        </header>
                        <div className="flex flex-col items-center mb-4 w-64">
                            <label htmlFor="login" className="text-2xl self-start">Login:</label>
                            <input id="login" type="text" className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <div className="flex flex-col items-center mb-4 w-64">
                            <label htmlFor="senha" className="text-2xl self-start">Senha:</label>
                            <input id="senha" type="password" className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <button className="bg-[#FFAA00] h-10 mt-4 rounded-3xl w-36 cursor-pointer" type="submit"><strong>Enviar</strong></button>
                        <Link to='/cadastro'>Não tem conta? Cadastre-se agora</Link>
                    </form>
                </div>

            </div>
        </Pagina>
    );
}
