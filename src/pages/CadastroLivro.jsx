import { useState } from "react";
import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";

export function CadastroLivro() {
    const estiloInput = `bg-white rounded-3xl text-black w-52`

    const [novoLivro, setNovoLivro] = useState({ isbn: "", titulo: "", editora: "", edicao: "", qntEstoque: "", resumo: ""});
    const [novaCategoria, setNovaCategoria] = useState({ nomeCategoria: "" })
    const [novoAutor, setNovoAutor] = useState({ nomeAutor: "" })

    return (
        <div>
            <Pagina>
                <div className="flex flex-row h-screen font-poppins w-screen"> 
                    <Menu/>
                    <div className="flex-1 p-8 grid place-items-center h-full w-full">
                        <form action="" className="grid grid-cols-2 gap-4  ">
                            <div className="flex flex-col">
                                <label htmlFor="">ISBN:</label>
                                <input type="text" className={estiloInput}/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="">Categoria:</label>
                                <input type="text" className={estiloInput}/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="">Editora:</label>
                                <input type="text" className={estiloInput}/>
                            </div>
                            
                            <div className="flex flex-col">
                                <label htmlFor="">Título:</label>
                                <input type="text" className={estiloInput}/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="">Autor:</label>
                                <input type="text" className={estiloInput}/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="">Edição:</label>
                                <input type="email" className={estiloInput}/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="">Resumo:</label>
                                <input type="text" className={estiloInput}/>
                            </div>
                        </form>
                        <div className="mt-[-20px]">
                            <button className="bg-[#FFAA00] h-10 mt-4 rounded-3xl w-36 cursor-pointer self-centerz" type="submit"><strong>Cadastrar</strong></button>
                        </div>
                    </div>
                </div>
            </Pagina>
        </div>
    )
}