import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import { useContext, useState } from "react";
import { DadosContext } from "../context/DadosContext";
import { Link } from "react-router-dom";

export function CadastroLivro() {
    const { dados, adicionarDados } = useContext(DadosContext);
    const estiloInput = `bg-white rounded-3xl text-black w-full h-full`
    const estiloLabel = `text-2xl`
    const [novoLivro, setNovoLivro] = useState({ ISBN: "", idCategoria: "", editora: "", titulo: "", idAutor: "", edicao: "", resumo: "", foto: "", qtdEstoque: ""});
    async function criarLivro(e) {
        e.preventDefault();
        try {
          if (!novoLivro.ISBN || !novoLivro.idCategoria || !novoLivro.editora || !novoLivro.titulo || !novoLivro.idAutor || !novoLivro.edicao || !novoLivro.resumo) {
            alert("Preencha todos os campos!")
            return
          }
          console.log(novoLivro.qtdEstoque);
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
          console.log(dados)
    
    
          setNovoLivro({ ISBN: "", idCategoria: "", editora: "", titulo: "", idAutor: "", edicao: "", resumo: "", foto: "", qtdEstoque: ""})
          } catch (error) {
          console.error(error)
        }
      }


    return (
        <div>
            <Pagina>
                <div className="flex flex-row h-full font-poppins w-screen"> 
                    <Menu/>
                    <div className="grid place-items-center  h-full w-full">
                        <form action="POST" className="flex-col items-center justify-center w-full sm:max-w-2xl sm:grid sm:grid-cols-2 gap-6 p-10" onSubmit={criarLivro}>
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Categoria:</label>
                                <br />
                                <input type="text" value={novoLivro.idCategoria} onChange={(e) => setNovoLivro({ ...novoLivro, idCategoria: e.target.value })} className={estiloInput}/>
                            </span>
                        
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>ISBN:</label>
                                <br />
                                <input type="text" value={novoLivro.ISBN} onChange={(e) => setNovoLivro({ ...novoLivro, ISBN: e.target.value })} className={estiloInput}/>
                            </span>
                                
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Editora:</label>
                                <br />
                                <input type="text" value={novoLivro.editora} onChange={(e) => setNovoLivro({ ...novoLivro, editora: e.target.value })} className={estiloInput}/>
                            </span>
                                
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Título:</label>
                                <br />
                                <input type="tel" value={novoLivro.titulo} onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })} className={estiloInput}/>

                            </span>
                            
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Resumo:</label>
                                <br />
                                <input type="text" value={novoLivro.resumo} onChange={(e) => setNovoLivro({ ...novoLivro, resumo: e.target.value })} className={estiloInput}/>
                            </span>
                            
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Edição:</label>
                                <br />
                                <input type="edicao" value={novoLivro.edicao} onChange={(e) => setNovoLivro({ ...novoLivro, edicao: e.target.value })} className={estiloInput}/>
                            </span>
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Foto da capa 📷</label>
                                <br />
                                <input type="file" name="foto"  onChange={(e) => setNovoLivro({...novoLivro, foto: e.target.files[0]})} className="inline-block bg-white w-full text-black rounded-lg cursor-pointer hover:bg-indigo-700 transition duration-300"/>
                            </span>

                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>idAutor</label>
                                <br />
                                <input type="text" value={novoLivro.idAutor} onChange={(e) => setNovoLivro({...novoLivro, idAutor: e.target.value})} name="idAutor" className={estiloInput}/>
                            </span>
                            <span>
                                <label htmlFor="" className={`text-xl sm:text-2xl`}>Quantidade de estoque</label>
                                <br />
                                <input type="number" value={novoLivro.qtdEstoque} onChange={(e) => setNovoLivro({...novoLivro, qtdEstoque: e.target.value})} name="qtdEstoque" className={estiloInput}/>
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