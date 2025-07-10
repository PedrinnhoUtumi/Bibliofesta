import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import { useContext, useEffect, useState } from "react";
import { DadosContext } from "../context/DadosContext";
import { useParams, useLocation} from "react-router-dom";

export function AtualizarLivro() {
    const { dados, adicionarDados } = useContext(DadosContext);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let dado = searchParams.get("dado");
    const estiloInput = `bg-white rounded-3xl text-black w-72 h-7 p-2`
    const estiloLabel = `text-2xl`
    const { isbn } = useParams()

    const [novoLivro, setNovoLivro] = useState({ isbn: "", titulo: "", idcategoria: "", idautor: "", editora: "", edicao: "", qtdestoque: "", imagemcapa: "", resumo: "" });

    useEffect(() => {
        try {
          const obj = JSON.parse(dado);
          console.log("dados recebidos", obj);
          setNovoLivro(obj);
        } catch (error) {
          console.error("Erro ao fazer parse do dado da URL:", error);
        }
      }, []);

    console.log("novo livro após dados recebidos", novoLivro);
    


    async function atualizaLivro(isbn, dado) {
        try {
            const formData = new FormData();
            Object.entries(novoLivro).forEach(([key, value]) => {
                formData.append(key, value);
            });
    
            const response = await fetch(`http://127.0.0.1:3000/api/usuario/livro?isbn=${isbn}`, {
                method: "PUT",
                // headers: {
                //     "Content-Type": "application/json",
                // },
                // body: JSON.stringify({dados: dado}),
                body: formData,

            })
            const dados = await response.json()
            console.log(dados)
            navigate("/emprestimo")
        
            setNovoLivro({ ISBN: "", idCategoria: "", editora: "", titulo: "", idAutor: "", edicao: "", resumo: "", imagemcapa: "", qtdEstoque: ""})

            if (!response.ok) {
                console.log(response)
            }

        } catch (error) {
            console.error(error)
        }
      }

      async function handleSubmit(e) {
        e.preventDefault();
        await atualizaLivro(novoLivro.isbn, novoLivro);
      }

    return (
        <div>
            <Pagina>
                <div className="flex flex-row h-full font-poppins w-screen">
                    <Menu />

                    <div className="flex flex-col items-center justify-center w-full p-10">
                        

                        
                        <div className="bg-[#03588C] shadow-xl rounded-xl p-8 w-full max-w-5xl">
                        <h1 className="text-4xl font-bold text-center mb-8">Cadastro de Livros</h1>
                            <form className="grid grid-cols-3 sm:grid-cols-2 gap-6" action="POST" onSubmit={atualizaLivro}>
                                
                                <span>
                                    <label className={estiloLabel}>Categoria:</label>
                                    <br />
                                    <input type="text" value={novoLivro?.idcategoria} onChange={(e) => setNovoLivro({ ...novoLivro, idcategoria: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>ISBN:</label>
                                    <br />
                                    <input type="text" value={novoLivro?.isbn} onChange={(e) => setNovoLivro({ ...novoLivro, isbn: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Editora:</label>
                                    <br />
                                    <input type="text" value={novoLivro?.editora} onChange={(e) => setNovoLivro({ ...novoLivro, editora: e.target.value })} className={estiloInput} />
                                </span>
                                <span>
                                    <label className={estiloLabel}>Título:</label>
                                    <br />
                                    <input type="text" value={novoLivro?.titulo} onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Resumo:</label>
                                    <br />
                                    <input type="text" value={novoLivro?.resumo} onChange={(e) => setNovoLivro({ ...novoLivro, resumo: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Edição:</label>
                                    <br />
                                    <input type="text" value={novoLivro?.edicao} onChange={(e) => setNovoLivro({ ...novoLivro, edicao: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Quantidade:</label>
                                    <br />
                                    <input type="number" value={novoLivro?.qtdestoque} onChange={(e) => setNovoLivro({ ...novoLivro, qtdestoque: e.target.value })} className={estiloInput} />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Foto:</label>
                                    <br />
                                    <input type="file" name="imagemcapa" onChange={(e) => setNovoLivro({ ...novoLivro, imagemcapa: e.target.files[0] })} className="inline-block bg-white w-full text-black rounded-lg cursor-pointer hover:bg-indigo-700 transition duration-300" />
                                </span>

                                <span>
                                    <label className={estiloLabel}>Autor (ID):</label>
                                    <br />
                                    <input type="text" value={novoLivro?.idautor} onChange={(e) => setNovoLivro({ ...novoLivro, idautor: e.target.value })} className={estiloInput} />
                                </span>
                                <button className="bg-[#11a3b2] w-72 text-white font-semibold h-10 rounded-3xl" type="submit" >
                                    Alterar Livro
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </Pagina>
        </div>
    )
}