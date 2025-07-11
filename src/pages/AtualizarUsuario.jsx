import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import { useContext, useState, useEffect } from "react";
import { DadosContext } from "../context/DadosContext";
import { useParams, useLocation } from "react-router-dom";


export function AtualizarUsuario() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let dado = searchParams.get("dado");
    const [novoUsuario, setNovoUsuario] = useState({ nomecliente: "", ra: "", idprofissao: "", telefone: "", datanasc: "", email: "", codigocurso: "" });
    const estiloInput = `bg-white rounded-3xl text-black w-72 h-7 p-2`
    const estiloLabel = `text-2xl`
    const { dados, adicionarDados } = useContext(DadosContext);
    const [isVisivel, setIsVisivel] = useState(false)
    const { idCliente } = useParams()


    const [curso, setCurso] = useState({ codigoCurso: "", nomeCurso: "" })

    function cadastroCurso(e) {
        (e).preventDefault()
        setIsVisivel(!isVisivel);
    }

    useEffect(() => {
        try {
            const obj = JSON.parse(dado);
            setNovoUsuario(obj);
        } catch (error) {
            console.error("Erro ao fazer parse do dado da URL:", error);
        }
    }, []);




    async function atualizaUsuario(idCliente, dado) {
        try {
            const response = await fetch(`http://127.0.0.1:3000/api/usuario?idCliente=${idCliente}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ dados: dado }),
            })

            if (!response.ok) {
                console.error(response)
            }

        } catch (error) {
            console.error(error)
        }
    }

    async function criarCurso(e) {
        e.preventDefault();
        try {
            if (!curso.codigoCurso || !curso.nomeCurso) {
                alert("Preencha todos os campos!")
                return
            }
            const response = await fetch(`http://127.0.0.1:3000/cadastrarCurso`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(curso),
            })

            if (!response.ok) {
                throw new Error(`Erro ao criar curso: ${response.statusText}`)
            }


            const dados = await response.json()

            setCurso({ codigoCurso: "", nomeCurso: "" })
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <Pagina>
                <div className="flex flex-row min-h-screen font-poppins w-screen">
                    <Menu />

                    <div className="flex flex-col items-center justify-center w-full p-10">



                        <div className="bg-[#03588C] shadow-xl rounded-xl p-8 w-full max-w-5xl min-h-fit">
                            <h1 className="text-4xl font-bold text-center mb-8">Cadastro de Usuários</h1>
                            <form className="grid grid-cols-3 sm:grid-cols-2 gap-6">

                                <span>
                                    <label className={estiloLabel}>RA:</label>
                                    <br />
                                    <input type="text" value={novoUsuario.ra} onChange={(e) => setNovoUsuario({ ...novoUsuario, ra: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Nome:</label>
                                    <br />
                                    <input type="text" value={novoUsuario.nomecliente} onChange={(e) => setNovoUsuario({ ...novoUsuario, nomecliente: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Profissão:</label>
                                    <br />
                                    <input type="text" value={novoUsuario.idprofissao} onChange={(e) => setNovoUsuario({ ...novoUsuario, idprofissao: e.target.value })} className={estiloInput} />
                                </span>
                                <span>
                                    <label className={estiloLabel}>Telefone:</label>
                                    <br />
                                    <input type="tel" value={novoUsuario.telefone} onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Curso (Código):</label>
                                    <br />
                                    <input type="text" value={novoUsuario.codigocurso} onChange={(e) => setNovoUsuario({ ...novoUsuario, codigocurso: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Email:</label>
                                    <br />
                                    <input type="email" value={novoUsuario.email} onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Data de Nascimento:</label>
                                    <input type="date" value={novoUsuario.datanasc} onChange={(e) => setNovoUsuario({ ...novoUsuario, datanasc: e.target.value })} className={estiloInput} />
                                </span>
                            </form>


                            <div className="flex items-center justify-between mt-6">

                                <button className="bg-[#48D1A0] text-white font-semibold h-10 px-6 rounded-3xl" type="submit" onClick={() => atualizaUsuario(idCliente, novoUsuario)}>
                                    Alterar Usuário
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Pagina>
        </div>
    )
}