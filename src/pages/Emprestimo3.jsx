import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import imagemLogin from "../assets/imagemLogin.png";
import { Search, StepBack, StepForward } from "lucide-react";
import { NavLink } from "react-router-dom";
export function Emprestimo3() {
  return (
    <div className="w-screen h-screen">
      <Pagina>
        <div className="flex h-screen font-poppins w-screen">
          <Menu />
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="flex flex-row items-center mb-8">
                <div>
                    <img src={imagemLogin} alt="" className="w-72 m-6" />
                    <p className="text-center">02 Unidades disponíveis</p>
                </div>
              <div className="flex flex-col">
                <p className="mb-5">Autor</p>
                <p className="w-72 h-auto">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam recusandae repellendus cupiditate iusto dolorem...
                </p>
                
              </div>
            </div>
            <div className="flex flex-row gap-20">
              <button
                className="bg-[#6b0808] h-12 rounded-3xl w-44 text-white font-semibold"
                type="submit"
              >
                Cancelar
              </button>
              <button
                className="bg-[#11a3b2] h-12 rounded-3xl w-44 text-white font-semibold"
                type="submit"
              >
                Emprestar
              </button>
            </div>
          </div>
        </div>
      </Pagina>
    </div>
  );
}
