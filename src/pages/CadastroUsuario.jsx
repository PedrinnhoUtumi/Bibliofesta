import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import { useContext, useState } from "react";
import { DadosContext } from "../context/DadosContext";

export function CadastroUsuario() {

    const estiloInput = `bg-white rounded-3xl text-black w-72 h-7`
    const estiloLabel = `text-2xl`
    const { dados, adicionarDados } = useContext(DadosContext);
    const [isVisivel, setIsVisivel] = useState(false)

    const [novoUsuario, setNovoUsuario] = useState({ nomeCliente: "", RA: "", idProfissao: "", telefone: "", dataNasc: "", email: "", codigoCurso: "" });
    const [curso, setCurso] = useState({ codigoCurso: "", nomeCurso: "" })

    function cadastroCurso(e) {
        (e).preventDefault()
        setIsVisivel(!isVisivel);
        console.log(dados)
    }

    async function criarUsuario(e) {
        e.preventDefault();
        try {
            if (!novoUsuario.nomeCliente || !novoUsuario.RA || !novoUsuario.idProfissao || !novoUsuario.telefone || !novoUsuario.dataNasc || !novoUsuario.email || !novoUsuario.codigoCurso) {
                alert("Preencha todos os campos!")
                return
            }


            const response = await fetch(`http://127.0.0.1:3000/cadastroUsuario`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoUsuario),
            })

            if (!response.ok) {
                throw new Error(`Erro ao criar usuário: ${response.statusText}`)
            }


            const dados = await response.json()
            console.log(dados)


            setNovoUsuario({ nomeCliente: "", RA: "", idProfissao: "", telefone: "", dataNasc: "", email: "", codigoCurso: "" })
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
            console.log(dados)


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
                    <div className=" grid place-items-center  h-full w-full ">
                        <form action="" className="grid grid-cols-2 gap-6 p-10 h-100">
                            <span>
                                <label htmlFor="" className={estiloLabel}>RA:</label>
                                <br />
                                <input type="text" value={novoUsuario.RA} onChange={(e) => setNovoUsuario({ ...novoUsuario, RA: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Nome:</label>
                                <br />
                                <input type="text" value={novoUsuario.nomeCliente} onChange={(e) => setNovoUsuario({ ...novoUsuario, nomeCliente: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Profissão:</label>
                                <br />
                                <input type="number" value={novoUsuario.idProfissao} onChange={(e) => setNovoUsuario({ ...novoUsuario, idProfissao: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Telefone:</label>
                                <br />
                                <input type="tel" value={novoUsuario.telefone} onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone: e.target.value })} className={estiloInput} />

                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Curso:</label>
                                <br />
                                <input type="text" value={novoUsuario.codigoCurso} onChange={(e) => setNovoUsuario({ ...novoUsuario, codigoCurso: e.target.value })} className={estiloInput} />

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
                                <input type="date" value={novoUsuario.dataNasc} onChange={(e) => setNovoUsuario({ ...novoUsuario, dataNasc: e.target.value })} className={estiloInput} />
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
                                    {dados.map((dado) => (
                                        <option key={dado.curso.codigo} value={dado.curso.nomecurso}>
                                            {dado.curso.nomecurso}
                                        </option>
                                    ))}
                                </select>
                        </span>
                        <footer className="mt-[-20px]">
                            <button className="bg-[#11a3b2] h-12  rounded-3xl w-55 cursor-pointer " type="submit" onClick={criarUsuario}><strong>Cadastrar</strong></button>
                        </footer>
                    </div>
                </div>
            </Pagina>
        </div>
    )
}