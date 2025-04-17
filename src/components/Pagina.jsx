export function Pagina(props) {
    return (
      <div className={`flex flex-row  bg-[#023067] text-white m-0`}>
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