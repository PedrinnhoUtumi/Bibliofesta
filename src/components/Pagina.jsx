export function Pagina(props) {
    return (
      <div className={`flex flex-row  bg-[#023067] text-white m-0 w-screen h-screen`}>
        <main
        className={`
            flex flex-col items-center justify-center m-0 
        `}
      >
        {props.children}
      </main>
      </div>
    );
  }