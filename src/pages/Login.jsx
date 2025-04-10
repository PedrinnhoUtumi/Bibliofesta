import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'

export function Login() {
    return (
        <Pagina>
            <div className="flex flex-row h-screen font-poppins"> 
               
                {/* Imagem no lado esquerdo */}
                <aside className="flex-shrink-0 bg-[#FFAA00] w-2/3 h-full flex items-center justify-center">
                    <img src={imagemLogin} alt="Imagem de Login" className="w-full h-full object-cover" />
                </aside>

                {/* Formulário no lado direito */}
                <div className="flex-1 p-8 flex flex-col items-center justify-center">
                    <header className="w-full flex justify-center items-start mb-8">
                        <h1 className="text-5xl"><strong>BIBLIOFESTA</strong></h1>
                    </header>
                    <form className="flex flex-col items-center justify-center w-full">
                        <div className="flex flex-col items-center mb-4 w-full">
                            <label htmlFor="login" className="text-2xl">Login:</label>
                            <input id="login" type="text" className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <div className="flex flex-col items-center mb-4 w-full">
                            <label htmlFor="senha" className="text-2xl">Senha:</label>
                            <input id="senha" type="password" className="bg-white m-2 rounded-3xl h-8 text-black w-64" />
                        </div>
                        <button className="bg-[#FFAA00] h-10 mt-4 rounded-3xl w-36"><strong>Enviar</strong></button>
                    </form>
                </div>
            </div>
        </Pagina>
    );
}
