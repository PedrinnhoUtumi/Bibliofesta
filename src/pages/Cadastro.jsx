import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'

export function Cadastro() {
    return (
        <Pagina>
            <div className="flex flex-row h-screen font-poppins"> 
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
                            <input id="login" type="text" className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <div className="flex flex-col items-center mb-4 w-64">
                            <label htmlFor="senha" className="text-2xl self-start">Senha:</label>
                            <input id="senha" type="password" className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <div className="flex flex-col items-center mb-4 w-64">
                            <label htmlFor="senha" className="text-2xl self-start">Confirmar Senha:</label>
                            <input id="senha" type="password" className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <button className="bg-[#FFAA00] h-10 mt-4 rounded-3xl w-36 cursor-pointer" type="submit"><strong>Cadastrar</strong></button>
                    </form>
                </div>
            </div>
        </Pagina>
    );
}
