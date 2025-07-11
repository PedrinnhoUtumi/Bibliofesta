import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import { useContext, useState } from "react";
import { DadosContext } from "../context/DadosContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function CadastroLivro() {
    const navigate = useNavigate()
    const { dados, adicionarDados } = useContext(DadosContext);
    const estiloInput = `bg-white rounded-3xl text-black w-72 h-7 p-2`
    const estiloLabel = `text-2xl`
    const [novoLivro, setNovoLivro] = useState({ ISBN: "", idCategoria: "", editora: "", titulo: "", idAutor: "", edicao: "", resumo: "", foto: "", qtdEstoque: "" });
    async function criarLivro(e) {
        e.preventDefault();
        try {
            if (!novoLivro.ISBN || !novoLivro.idCategoria || !novoLivro.editora || !novoLivro.titulo || !novoLivro.idAutor || !novoLivro.edicao || !novoLivro.resumo) {
                alert("Preencha todos os campos!")
                return
            }
            const formData = new FormData();
            Object.entries(novoLivro).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(`http://127.0.0.1:3000/cadastroLivro`, {
                method: "POST",
                //   headers: {
                //       "Content-Type": "application/json",
                //   },
                //   body: JSON.stringify(novoLivro),
                body: formData,
            })

            if (!response.ok) {
                throw new Error(`Erro ao criar usuário: ${response.statusText}`)
            }


            const dados = await response.json()
            navigate("/emprestimo")

            setNovoLivro({ ISBN: "", idCategoria: "", editora: "", titulo: "", idAutor: "", edicao: "", resumo: "", foto: "", qtdEstoque: "" })
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <Pagina>
                <div className="flex flex-row h-full font-poppins w-screen">
                    <Menu />

                    <div className="flex flex-col items-center justify-center w-full p-10">



                        <div className="bg-[#03588C] shadow-xl rounded-xl p-8 w-full max-w-5xl">
                            <h1 className="text-4xl font-bold text-center mb-8">Cadastro de Livros</h1>
                            <form className="grid grid-cols-3 sm:grid-cols-2 gap-6" action="POST" onSubmit={criarLivro}>
        
                                <select
                                    value={novoLivro.idCategoria}
                                    onChange={(e) => setNovoLivro({ ...novoLivro, idCategoria: e.target.value })}
                                    className="w-72 border-1 h-14"
                                >
                                    <option value="" className="text-black">Selecione uma categoria</option>
                                    {dados.categoria?.map((cat) => (
                                        <option key={cat.idcategoria} value={cat.idcategoria} className="text-black">{cat.nomecategoria}</option>
                                    ))}
                                </select>

                                <span>
                                    <label className={estiloLabel}>ISBN:</label>
                                    <br />
                                    <input type="text" value={novoLivro.ISBN} onChange={(e) => setNovoLivro({ ...novoLivro, ISBN: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Editora:</label>
                                    <br />
                                    <input type="text" value={novoLivro.editora} onChange={(e) => setNovoLivro({ ...novoLivro, editora: e.target.value })} className={estiloInput} />
                                </span>
                                <span>
                                    <label className={estiloLabel}>Título:</label>
                                    <br />
                                    <input type="text" value={novoLivro.titulo} onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Resumo:</label>
                                    <br />
                                    <input type="text" value={novoLivro.resumo} onChange={(e) => setNovoLivro({ ...novoLivro, resumo: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Edição:</label>
                                    <br />
                                    <input type="text" value={novoLivro.edicao} onChange={(e) => setNovoLivro({ ...novoLivro, edicao: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Quantidade:</label>
                                    <br />
                                    <input type="number" value={novoLivro.qtdEstoque} onChange={(e) => setNovoLivro({ ...novoLivro, qtdEstoque: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Foto:</label>
                                    <br />
                                    <input type="file" name="foto" onChange={(e) => setNovoLivro({ ...novoLivro, foto: e.target.files[0] })} className="inline-block bg-white w-72 text-black rounded-lg cursor-pointer hover:bg-indigo-700 transition duration-300" />
                                </span>

                                <select
                                    value={novoLivro.idAutor}
                                    onChange={(e) => setNovoLivro({ ...novoLivro, idAutor: e.target.value })}
                                    className="w-72 border-1 h-14"
                                >
                                    <option value="" className="text-black">Selecione uma categoria</option>
                                    {dados.autor?.map((cat) => (
                                        <option key={cat.idautor} value={cat.idautor} className="text-black">{cat.nomeautor}</option>
                                    ))}
                                </select>

                                <button className="bg-[#11a3b2] w-72 text-white font-semibold h-10 rounded-3xl" type="submit" >
                                    Cadastrar Usuário
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </Pagina>
        </div>
    )
}