import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import { useState } from "react";

export function CadastroLivro() {

    const estiloInput = `bg-white rounded-3xl text-black w-72 h-7`
    const estiloLabel = `text-2xl`
    const [novoLivro, setNovoLivro] = useState({ ISBN: "", categoria: "", editora: "", titulo: "", autor: "", edicao: "", resumo: ""});
    async function criarUsuario(e) {
        e.preventDefault();
        try {
          if (!novoLivro.ISBN || !novoLivro.categoria || !novoLivro.editora || !novoLivro.titulo || !novoLivro.autor || !novoLivro.edicao || !novoLivro.resumo) {
            alert("Preencha todos os campos!")
            return
          }

    
          const response = await fetch(`http://127.0.0.1:3000/cadastroUsuario`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(novoLivro),
          })
    
          if (!response.ok) {
              throw new Error(`Erro ao criar usuário: ${response.statusText}`)
          }
    
    
          const dados = await response.json()
          console.log(dados)
    
    
          setNovoLivro({ ISBN: "", categoria: "", editora: "", titulo: "", autor: "", edicao: "", resumo: ""})
          } catch (error) {
          console.error(error)
        }
      }

    return (
        <div>
            <Pagina>
                <div className="flex flex-row h-screen font-poppins w-screen"> 
                    <Menu/>
                    <div className=" grid place-items-center  h-full w-full ">
                        <form action="" className="grid grid-cols-2 gap-6 p-10 h-100">
                            <span>
                                <label htmlFor="" className={estiloLabel}>Categoria:</label>
                                <br />
                                <input type="text" value={novoLivro.categoria} onChange={(e) => setNovoLivro({ ...novoLivro, categoria: e.target.value })} className={estiloInput}/>
                            </span>
                        
                            <span>
                                <label htmlFor="" className={estiloLabel}>ISBN:</label>
                                <br />
                                <input type="text" value={novoLivro.ISBN} onChange={(e) => setNovoLivro({ ...novoLivro, ISBN: e.target.value })} className={estiloInput}/>
                            </span>
                                
                            <span>
                                <label htmlFor="" className={estiloLabel}>Editora:</label>
                                <br />
                                <input type="number" value={novoLivro.editora} onChange={(e) => setNovoLivro({ ...novoLivro, editora: e.target.value })} className={estiloInput}/>
                            </span>
                                
                            <span>
                                <label htmlFor="" className={estiloLabel}>Título:</label>
                                <br />
                                <input type="tel" value={novoLivro.titulo} onChange={(e) => setNovoLivro({ ...novoLivro, titulo: e.target.value })} className={estiloInput}/>

                            </span>
                            
                            <span>
                                <label htmlFor="" className={estiloLabel}>Resumo:</label>
                                <br />
                                <input type="text" value={novoLivro.resumo} onChange={(e) => setNovoLivro({ ...novoLivro, resumo: e.target.value })} className={estiloInput}/>

                                {/* <select selected id="resumo" name="curso" >
                                    <option value="informatica">TI24E</option>
                                    <option value="matematica">MAT24E</option>
                                </select> */}
                                {/* <Link to='/'>Curso não cadastcategoriado ainda? Cadastre agocategoria</Link> */}
                            </span>
                            
                            <span>
                                <label htmlFor="" className={estiloLabel}>Edição:</label>
                                <br />
                                <input type="edicao" value={novoLivro.edicao} onChange={(e) => setNovoLivro({ ...novoLivro, edicao: e.target.value })} className={estiloInput}/>
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Autor:</label>
                                <br />
                                <input type="date" value={novoLivro.autor} onChange={(e) => setNovoLivro({ ...novoLivro, autor: e.target.value })} className={estiloInput}/>
                            </span>
                        </form>
                        <footer className="mt-[-20px]">
                            <button className="bg-[#11a3b2] h-12  rounded-3xl w-55 cursor-pointer " type="submit" onClick={criarUsuario}><strong>Cadastcategoriar</strong></button>
                        </footer>
                    </div>
                </div>
            </Pagina>
        </div>
    )
}