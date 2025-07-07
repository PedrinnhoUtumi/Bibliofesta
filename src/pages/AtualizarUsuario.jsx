import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import { useContext, useState, useEffect } from "react";
import { DadosContext } from "../context/DadosContext";
import { useParams, useLocation} from "react-router-dom";


export function AtualizarUsuario() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let dado = searchParams.get("dado");
    const [novoUsuario, setNovoUsuario] = useState({ nomecliente: "", ra: "", idprofissao: "", telefone: "", datanasc: "", email: "", codigocurso: "" });
    const estiloInput = `bg-white rounded-3xl text-black w-72 h-7`
    const estiloLabel = `text-2xl`
    const { dados, adicionarDados } = useContext(DadosContext);
    const [isVisivel, setIsVisivel] = useState(false)
    const { idCliente } = useParams()


    const [curso, setCurso] = useState({ codigoCurso: "", nomeCurso: "" })

    function cadastroCurso(e) {
        (e).preventDefault()
        setIsVisivel(!isVisivel);
        console.log(dados)
    }

    // async function criarUsuario(e) {
    //     e.preventDefault();
    //     console.log("dado", dado);
    //     console.log("idCliente", idCliente);
        
                    
    // }

    useEffect(() => {
        try {
          const obj = JSON.parse(dado);
          console.log("dados recebidos", obj);
          setNovoUsuario(obj);
        } catch (error) {
          console.error("Erro ao fazer parse do dado da URL:", error);
        }
      }, []);

    console.log("novo usuario após dados recebidos", novoUsuario);
    


    async function atualizaUsuario(idCliente, dado) {
        try {
            const response = await fetch(`http://127.0.0.1:3000/api/usuario?idCliente=${idCliente}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({dados: dado}),
            })

            if (!response.ok) {
                console.log(response)
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
                <div className="flex flex-row h-screen font-poppins w-screen">
                    <Menu />
                    <div className="grid place-items-center  h-full w-full ">
                        <form action="" className="flex flex-col sm:grid sm:grid-cols-2 gap-6 p-10 h-100">
                            <span>
                                <label htmlFor="" className={estiloLabel}>RA:</label>
                                <br />
                                <input type="text" value={novoUsuario.ra} onChange={(e) => setNovoUsuario({ ...novoUsuario, ra: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Nome:</label>
                                <br />
                                <input type="text" value={novoUsuario.nomecliente} onChange={(e) => setNovoUsuario({ ...novoUsuario, nomecliente: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Profissão:</label>
                                <br />
                                <input type="number" value={novoUsuario.idprofissao} onChange={(e) => setNovoUsuario({ ...novoUsuario, idprofissao: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Telefone:</label>
                                <br />
                                <input type="tel" value={novoUsuario.telefone} onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone: e.target.value })} className={estiloInput} />

                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Curso:</label>
                                <br />
                                <input type="text" value={novoUsuario.codigocurso} onChange={(e) => setNovoUsuario({ ...novoUsuario, codigocurso: e.target.value })} className={estiloInput} />

                                {/* <select selected id="codigoCurso" name="curso" >
                                    <option value="informatica">TI24E</option>
                                    <option value="matematica">MAT24E</option>
                                </select> */}
                                {/* <Link to='/'>Curso não cadastrado ainda? Cadastre agora</Link> */}
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Email:</label>
                                <br />
                                <input type="email" value={novoUsuario.email} onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Data:</label>
                                <br />
                                <input type="date" value={novoUsuario.datanasc} onChange={(e) => setNovoUsuario({ ...novoUsuario, datanasc: e.target.value })} className={estiloInput} />
                            </span>
                        </form>
                        <span>
                        <button onClick={cadastroCurso}>
                            {isVisivel ? 'Cancelar' : 'Cadastrar'}
                        </button>
                                { isVisivel && (
                                    <div>
                                        <label htmlFor="" className={estiloLabel}>Código Curso</label>
                                        <br />
                                        <input type="text" className={estiloInput} value={curso.codigoCurso} onChange={(e) => setCurso({ ...curso, codigoCurso: e.target.value })}/>
                                        <br />
                                        <label htmlFor="" className={estiloLabel}>Nome Curso</label>
                                        <br />
                                        <input type="text" className={estiloInput} value={curso.nomeCurso} onChange={(e) => setCurso({ ...curso, nomeCurso: e.target.value })}/>
                                        <br />
                                        <button className="bg-[#11a3b2] h-9 mt-2 rounded-3xl w-40 cursor-pointer " onClick={criarCurso}>Cadastrar</button>
                                    </div>
                                )}
                                <br />
                                <label htmlFor="">Cursos</label>
                                <select name="" id="">
                                    {dados.curso?.map((dado) => (
                                        <option key={dado.codigo} value={dado.nomecurso}>
                                            {dado.nomecurso}
                                        </option>
                                    ))}
                                </select>
                        </span>
                        <footer className="mt-[-20px]">
                            <button className="bg-[#11a3b2] h-12  rounded-3xl w-55 cursor-pointer " type="submit" onClick={() => atualizaUsuario(idCliente, novoUsuario)}><strong>Atualizar</strong></button>
                        </footer>
                    </div>
                </div>
            </Pagina>
        </div>
    )
}