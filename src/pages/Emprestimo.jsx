import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'
import { Search, StepBack, StepForward } from "lucide-react";
export function Emprestimo() {
    return (
        <div className="w-screen h-screen">
            <Pagina>
                <div className="flex flex-row h-screen font-poppins w-screen"> 
                    <Menu/>
                   <div className="flex flex-col justify-between items-center w-full">
                    <span className="w-110 flex flex-row items-center justify-center rounded-2xl mt-36">
                        <input type="text" className="w-96 h-5 p-4 bg-white focus:outline-none 	rounded-l-2xl text-black"/> 
                        <div className="border-4 bg-white rounded-r-2xl"> <Search className="text-black "/> </div>
                    </span>
                    <div className="h-80 w-full flex self-end mb-40 rounded-2xl bg-[#11a3b2]/45 items-center justify-around">
                        <StepBack size="50px"/>
                        <img src={imagemLogin} alt="" className="w-72"/>
                        <img src={imagemLogin} alt="" className="w-72"/>
                        <img src={imagemLogin} alt="" className="w-72"/>
                        <StepForward size="50px"/>
                     </div>
                   </div>

                </div>
            </Pagina>
        </div>
    )
}