import { Pagina } from "../components/Pagina";


export function Cadastro() {

    return (
        <Pagina>
            <div className="flex flex-col items-start justify-center font-poppins">
                <header className=" w-96 flex justify-center items-start">
                <h1 className="text-5xl"><strong>BIBLIOFESTA</strong></h1>
                </header>
                <div className="flex flex-col items-center justify-center h-96 w-full">
                    <div className="flex items-center mb-4 flex-col">
                        <label htmlFor="" className="mr-[220px] text-2xl">Login:</label>
                        <input type="text" className="bg-white m-2 rounded-3xl h-8 text-black"/>
                    </div>
                    <div className="flex items-center mb-4 flex-col">
                        <label htmlFor="" className="mr-[220px] text-2xl">Senha:</label>
                        <input type="password" className="bg-white m-2 rounded-3xl h-8 text-black"/>
                    </div>
                    <div className="flex items-center mb-4 flex-col">
                        <label htmlFor="" className="mr-[95px] text-2xl">Confirmar Senha:</label>
                        <input type="password" className="bg-white m-2 rounded-3xl h-8 text-black"/>
                        <button className="bg-[#FFAA00] h-10 mt-4 rounded-3xl w-36 "><strong>Cadastrar</strong></button>
                </div>
            </div> 
        </Pagina>
    )
}