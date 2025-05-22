import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";

export function CadastroUsuario() {

    const estiloInput = `bg-white rounded-3xl text-black w-72 h-7`
    const estiloLabel = `text-2xl`

    return (
        <div>
            <Pagina>
                <div className="flex flex-row h-screen font-poppins w-screen"> 
                    <Menu/>
                    <div className=" grid place-items-center  h-full w-full ">
                        <form action="" className="grid grid-cols-2 gap-6 p-10 h-100">
                            <span>
                                <label htmlFor="" className={estiloLabel}>RA:</label>
                                <br />
                                <input type="text" className={estiloInput}/>
                            </span>
                        
                            <span>
                                <label htmlFor="" className={estiloLabel}>Nome:</label>
                                <br />
                                <input type="text" className={estiloInput}/>
                            </span>
                                
                            <span>
                                <label htmlFor="" className={estiloLabel}>Profissão:</label>
                                <br />
                                <input type="text" className={estiloInput}/>
                            </span>
                                
                            <span>
                                <label htmlFor="" className={estiloLabel}>Telefone:</label>
                                <br />
                                <input type="text" className={estiloInput}/>

                            </span>
                            
                            <span>
                                <label htmlFor="" className={estiloLabel}>Curso:</label>
                                <br />
                                <input type="text" className={estiloInput}/>
                            </span>
                            
                            <span>
                                <label htmlFor="" className={estiloLabel}>Email:</label>
                                <br />
                                <input type="email" className={estiloInput}/>
                            </span>

                            <span>
                                <label htmlFor="" className={estiloLabel}>Data:</label>
                                <br />
                                <input type="text" className={estiloInput}/>
                            </span>
                        </form>
                        <footer className="mt-[-20px]">
                            <button className="bg-[#11a3b2] h-12  rounded-3xl w-55 cursor-pointer " type="submit"><strong>Cadastrar</strong></button>
                        </footer>
                    </div>
                </div>
            </Pagina>
        </div>
    )
}