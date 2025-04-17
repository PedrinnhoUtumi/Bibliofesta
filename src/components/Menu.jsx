// import {
//     IconAddressBook,
//     IconHome,
//     IconRouteAltLeft,
//     IconBook,
//     IconSwitchHorizontal,
//     IconReportMoney

//   } from "@tabler/icons-react";
  import { NavLink } from "react-router-dom";
  import imgMenu from "../assets/menu.png"
import { ArrowLeftRight, BookOpenText, CircleDollarSign, CircleDollarSignIcon, LogOutIcon, NotebookText } from "lucide-react";
  export function Menu() {
    const getEstilo = (props) => {
      let estilo = `
        flex items-center gap-4
        px-3 py-3 w-full
        text-2xl text-black
        font-weight: bold;
        hover:underline decoration-2 decoration-[#023067]`;
      let ativo = "border-r-4 border-solid border-slate-800 ";

      let final = props.isActive ? estilo + ativo : estilo;
  
      return final;
    };
  
    return (
      <aside className="flex flex-col gap-5 bg-[#FFAA00] min-w-72">
        <header
          className={`
            flex justify-center items-center gap-2
            bg-[#FFAA00] text-zinc-50 
            px-1 py-5 h-16          
            text-2xl font-black
          `}
        >
            <div className="flex flex-col w-42">
                <img className="mt-42" src={imgMenu} alt="" />
                <span className=" text-center font-bold w-42 ">Bibliofesta</span>
            </div>
        </header>
  
        <nav
          className={`
            flex flex-col mt-45 justify-start items-center gap-2   
                 
          `}
        >
          <NavLink to="emprestimo" className={getEstilo}>
            <ArrowLeftRight />
            Emprestimo
          </NavLink>
          <NavLink to="cadastroUsuario" className={getEstilo}>
            <NotebookText />
            Cadastrar Usuário
          </NavLink>
          <NavLink to="cadastroLivro" className={getEstilo}>
            <BookOpenText />
            Cadastrar Livro
          </NavLink>
  
          <NavLink to="gerenciarDividas" className={getEstilo}>
            <CircleDollarSignIcon />
            Gerenciar Dívidas
          </NavLink>

        </nav>
  
        <footer className="absolute bottom-0 p-2 w-72 flex justify-center cursor-pointer text-black border-1">
            <LogOutIcon/>
          <span className="ml-5"> Log out </span>
        </footer>
      </aside>
    );
  }
  