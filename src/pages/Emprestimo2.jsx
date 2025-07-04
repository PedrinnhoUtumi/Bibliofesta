import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import imagemLogin from '../assets/imagemLogin.png'
import { Search, StepBack, StepForward } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { DadosContext } from "../context/DadosContext";
export function Emprestimo2() {
  const { isbn } = useParams()
  const { dados } = useContext(DadosContext)
  return (
    <div className="w-screen h-screen">
      <Pagina>
        <div className="flex flex-row h-screen font-poppins w-screen">
          <Menu />
          <div className="flex flex-col justify-between items-center w-full h-full">
            <span className="w-full flex flex-row justify-center rounded-2xl mt-36">
              <input type="text" className="w-42 sm:w-96 h-5 p-4 mb-10 bg-white focus:outline-none 	rounded-l-2xl text-black" />
              <div className="border-4 bg-white rounded-r-2xl mb-10"> <Search className="text-black " /> </div>
            </span>
            <div className="h-full w-full flex flex-row mb-[400px] rounded-2xl bg-[#11a3b2]/45 items-center justify-center">
              <div className="w-72">
                <img src={imagemLogin} alt="" className="w-44 h-44 sm:w-full sm:h-full" />
              </div>
              <div className=" w-1/4 h-full flex flex-col justify-center items-center">
                <button
                  className="bg-[#6b0808] h-5 sm:h-12 w-20 sm:w-44 rounded-3xl text-white font-semibold mt-2"
                  type="submit">
                  Emprestar
                </button>
                <br />
                <button
                  className="bg-[#6b0808] h-5 sm:h-12 w-20 sm:w-44 rounded-3xl text-white font-semibold mt-2"
                  type="submit">
                  Atualizar
                </button>
                <br />
                <button
                  className="bg-[#6b0808] h-5 sm:h-12 w-20 sm:w-44 rounded-3xl text-white font-semibold mt-2"
                  type="submit">
                  Excluir
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </Pagina>
    </div>
  )
}