import { MenuTelaLogin } from "./MenuTelaLogin";

export function Pagina(props) {
    return (
      <div className={`flex flex-row flex-1 bg-[#023067] text-white`}>
        <MenuTelaLogin/>
        <main
        className={`
            flex flex-col items-center justify-center flex-1 p-4
        `}
      >
        {props.children}
      </main>
      </div>
    );
  }