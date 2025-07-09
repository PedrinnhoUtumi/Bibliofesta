import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'
import { Search, StepBack, StepForward } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { DadosContext } from "../context/DadosContext";
export function Emprestimo() {
    const {dados} = useContext(DadosContext)
    const [livros, setLivros] = useState([])
    const [procura, setProcura] = useState("");
    const location = useLocation();

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

    const selectBD = livros.slice(inicio, fim).filter((l) =>
        l.titulo?.toLowerCase().includes(procura.toLowerCase())
    );

    useEffect(function (){ 
        async function buscarLivros(){
            try {
                const response = await fetch(`http://127.0.0.1:3000/api/usuario`)
                if (!response.ok) {
                    throw new Error(`Erro ao buscar livro: ${response.statusText}`)
                }
    
                const data = await response.json()
                console.log("dados de livro", data.message.livro);
                
                
                const livrosFormatados = data.message.livro.map(livro => {
                    console.log("imagemcapa bruta:", livro.imagemcapa);
                    return {
                        ...livro,
                        imagemcapa: `http://localhost:3000/${livro.imagemcapa}`
                    };
                });

            
                setLivros(livrosFormatados)
                setPagina(0)
            } catch (erro){
                console.error("erro ao" , erro)
            }
        }
        buscarLivros()
        console.log("livros", livros);
        
    }, [location.key])


    return (
        <div className="w-screen h-screen">
            <Pagina>
                <div className="flex flex-row h-screen font-poppins w-screen"> 
                    <Menu/>
                   <div className="flex flex-col justify-between items-center w-full">
                    
                    <span className="w-full flex flex-row items-center justify-center rounded-2xl mt-36">
                        <input type="text" className=" w-42 sm:w-96 h-5 p-4 bg-white focus:outline-none mb-10 rounded-l-2xl text-black" onChange={(e) => setProcura(e.target.value)}/> 
                        <div className="border-4 bg-white rounded-r-2xl mb-10"> <Search className="text-black "/> </div>
                    </span>
                    <div className="h-full w-full  flex mb-50 rounded-2xl bg-[#11a3b2]/45 items-center justify-around">
                        <StepBack size="50px" onClick={paginaAnterior}/>
                        {selectBD?.map((livro) => (
                                <NavLink key={livro.isbn} to={`/emprestimo2/${livro.isbn}`}>
                                    <img src={livro.imagemcapa} alt={livro.titulo} className="w-42 h-52" />
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