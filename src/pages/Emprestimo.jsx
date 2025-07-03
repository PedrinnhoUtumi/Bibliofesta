import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'
import { Search, StepBack, StepForward } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DadosContext } from "../context/DadosContext";
export function Emprestimo() {
    const {dados} = useContext(DadosContext)
    const [livros, setLivros] = useState([])

    const [pagina, setPagina] = useState(0);
    const livrosPagina = 3;

    const inicio = pagina * livrosPagina;
    const fim = inicio + livrosPagina;

    function proximaPagina() {
        if (fim < livros.length) {
          setPagina(pagina + 1);
        }
      }
      
    function paginaAnterior() {
    if (pagina > 0) {
        setPagina(pagina - 1);
    }
    }

    function buscaImagens() {
        if (!dados.livro || dados.livro.length === 0) return;
    
        const livrosFormatados = dados.livro.map(livro => ({
            ...livro,
            imagemcapa: `http://localhost:3000/${livro.imagemcapa}`
        }));
    
        setLivros(livrosFormatados);
    }


    useEffect( function (){
        // async function BuscarLivros(){
        //     try {
        //         const response = await fetch(`http://127.0.0.1:3000/cadastroLivro`)

        //         if (!response.ok) {
        //             throw new Error(`Erro ao buscar livro: ${response.statusText}`)
        //         }

        //         const data = await response.json()
        //         setLivros(data)


        //     } catch (erro){
        //         console.error("erro ao" , erro)
        //     }
        // }
        // BuscarLivros()
        buscaImagens()
        console.log("livros",livros);
        
    }, [dados])


    return (
        <div className="w-screen h-screen">
            <Pagina>
                <div className="flex flex-row h-screen font-poppins w-screen"> 
                    <Menu/>
                   <div className="flex flex-col justify-between items-center w-full">
                    <span className="w-110 flex flex-row items-center justify-center rounded-2xl mt-36">
                        <input type="text" className="w-96 h-5 p-4 bg-white focus:outline-none 	rounded-l-2xl text-black"/> 
                        <div className="border-4 bg-white rounded-r-2xl"> <Search className="text-black "/> </div>
                    </span>
                    <div className="h-80 w-full flex self-end mb-40 rounded-2xl bg-[#11a3b2]/45 items-center justify-around">
                        <StepBack size="50px" onClick={paginaAnterior}/>
                        {livros.slice(0, 3).map((livro) => (
                                <NavLink key={livro.id} to={`/emprestimo2/${livro.id}`}>
                                    <img src={livro.imagemcapa} alt={livro.titulo} className="w-72" />
                                </NavLink>
                            ))}
                        <StepForward size="50px" onClick={proximaPagina}/>
                     </div> 
                   </div>
                </div>
            </Pagina>
        </div>
    )
}