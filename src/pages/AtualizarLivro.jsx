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
    const estiloInput = `bg-white rounded-3xl text-black w-full h-full`
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
                    <div className="grid place-items-center  h-full w-full">
                        <form action="POST" className="flex-col items-center justify-center w-full sm:max-w-2xl sm:grid sm:grid-cols-2 gap-6 p-10" onSubmit={handleSubmit}>
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Categoria:</label>
                                <br />
                                <input type="text" value={novoLivro?.idcategoria} onChange={(e) => setNovoLivro({ ...novoLivro, idcategoria: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>ISBN:</label>
                                <br />
                                <input type="text" value={novoLivro?.isbn} onChange={(e) => setNovoLivro({ ...novoLivro, isbn: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Editora:</label>
                                <br />
                                <input type="text" value={novoLivro?.editora} onChange={(e) => setNovoLivro({ ...novoLivro, editora: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Título:</label>
                                <br />
                                <input type="text" value={novoLivro?.titulo} onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })} className={estiloInput} />

                            </span>

                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Resumo:</label>
                                <br />
                                <input type="text" value={novoLivro?.resumo} onChange={(e) => setNovoLivro({ ...novoLivro, resumo: e.target.value })} className={estiloInput} />
                            </span>

                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Edição:</label>
                                <br />
                                <input type="edicao" value={novoLivro?.edicao} onChange={(e) => setNovoLivro({ ...novoLivro, edicao: e.target.value })} className={estiloInput} />
                            </span>
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Foto da capa 📷</label>
                                <br />
                                <input type="file" name="imagemcapa" onChange={(e) => setNovoLivro({ ...novoLivro, imagemcapa: e.target.files[0] })} className="inline-block bg-white w-full text-black rounded-lg cursor-pointer hover:bg-indigo-700 transition duration-300" />
                            </span>

                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>idAutor</label>
                                <br />
                                <input type="text" value={novoLivro?.idautor} onChange={(e) => setNovoLivro({ ...novoLivro, idautor: e.target.value })} name="idAutor" className={estiloInput} />
                            </span>
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Quantidade de estoque</label>
                                <br />
                                <input type="number" value={novoLivro?.qtdestoque} onChange={(e) => setNovoLivro({ ...novoLivro, qtdestoque: e.target.value })} name="qtdEstoque" className={estiloInput} />
                            </span>

                            <footer className="col-span-2 mt-4 bg-[#023067] w-full flex justify-center">
                                <button className="bg-[#11a3b2] h-full rounded-3xl w-1/2 cursor-pointer p-3" type="submit"><strong>Cadastrar</strong></button>
                            </footer>
                        </form>
                    </div>
                </div>
            </Pagina>
        </div>
    )
}