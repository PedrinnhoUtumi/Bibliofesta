import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'
import { Search, StepBack, StepForward, Trash2, NotebookPen } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DadosContext } from "../context/DadosContext";

export function VerificarEmprestimos() {

    const navigate = useNavigate()
    const [procura, setProcura] = useState("")
    const [deletados, setDeletados] = useState([])
    const { dados, adicionarDados } = useContext(DadosContext);


    const emprestimo3 = (e) => {
        e.preventDefault();
        navigate("/Emprestimo");

    };


    //   async function AtualizarUsuario(idemprestimo, dado) {
    //     try {
    //       navigate(
    //         `/AtualizarUsuario/${idemprestimo}?dado=${encodeURIComponent(
    //           JSON.stringify(dado)
    //         )}`
    //       );
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }

    const selectBD = dados.emprestimo?.filter((e) =>
        e.isbnlivro?.toLowerCase().includes(procura.toLowerCase())
    );

    const deleteBD = async (idemprestimo) => {
        try {
            const resposta = await fetch(
                `http://127.0.0.1:3000/api/emprestimo/${idemprestimo}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!resposta.ok) {
                console.error(resposta);
                const texto = await resposta.text();
            } else {

                setDeletados((prevDeletados) => [...prevDeletados, idemprestimo]);
                const novosDados = {
                    ...dados,
                    emprestimo: dados.emprestimo?.filter(
                        (dado) => dado.idemprestimo !== idemprestimo
                    ),
                };
                adicionarDados(novosDados);


            }
        } catch (error) {
            console.error(error);
        }

        window.location.reload();
    };
    

    return (
        <div className="w-screen h-screen">
            <Pagina>
                <div className="flex flex-row h-screen font-poppins w-screen">
                    <Menu />
                    <div className="flex flex-col justify-center items-center w-full">
                        <div className="bg-[#03588C] flex flex-col items-center w-[70vw] h-[85vh] rounded-2xl">
                            <h1 className="text-4xl font-bold text-center h-12 mt-8">Emprestimos</h1>
                            <span className="w-110 flex flex-row  justify-center rounded-2xl mt-5">
                                <input
                                    type="text"
                                    className="w-[25vw] p-4 h-5  bg-white focus:outline-none rounded-l-2xl text-black"
                                    onChange={(e) => setProcura(e.target.value)}
                                    placeholder="Buscar emprestimo..."
                                />
                                <div className="border-4 bg-white rounded-r-2xl">
                                    {" "}
                                    <Search className="text-black " />{" "}
                                </div>
                            </span>
                            <div style={{
                                scrollbarWidth: "none",
                                borderColor: "rgba(72, 209, 160, 0.45)"
                            }} className="bg-[#48D1A0]/45 border-5  max-h-1/2 rounded-2xl  w-[60vw] flex flex-col justify-center items-center overflow-y-auto mt-5 space-y-3 ">
                               

                                {selectBD?.filter((dado) => dado.status != false).map((dado) => {
                                    return(
                                        <div key={dado.idemprestimo} className="w-full flex flex-col justify-center items-center">
                                            <div className="h-10 w-[55vw] flex justify-evenly rounded-2xl mt-5 bg-[#03588C]/45 items-center">
                                                <span className="sm:w-30">
                                                    {dado.status ? "emprestado" : "disponivel"}
                                                </span>
                                                <span className="w-10 sm:w-20">
                                                    {dado.isbnlivro}
                                                </span>

                                                <span className="w-10 sm:w-45">
                                                    {dado.dataemprestimo}
                                                </span>
                                                <span className="flex flex-row">
                                                    <Trash2
                                                        className="cursor-pointer"
                                                        onClick={(e) => deleteBD(dado.idemprestimo)
                                                        }
                                                    />
                                                    <NotebookPen
                                                        className="cursor-pointer"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                )
                                })}
                            </div>
                            <footer className="mt-5">
                                <button
                                    className="bg-[#FFA500] h-12 mb-5 rounded-3xl w-55 cursor-pointer "
                                    type="submit"
                                    onClick={emprestimo3}                              >
                                    <strong>Novo emprestimo</strong>
                                </button>
                            </footer>
                        </div>
                    </div>
                </div>
            </Pagina>
        </div>
    );
}
