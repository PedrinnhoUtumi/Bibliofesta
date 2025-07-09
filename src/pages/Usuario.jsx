import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import imagemLogin from "../assets/imagemLogin.png";
import {
  Search,
  StepBack,
  StepForward,
  Trash2,
  NotebookPen,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DadosContext } from "../context/DadosContext";
export function Usuario() {
  const navigate = useNavigate();
  const [procura, setProcura] = useState("");
  const [deletados, setDeletados] = useState([]);
  const { dados, adicionarDados } = useContext(DadosContext);

  const cliente = [
    { RA: "en-us", nome: "Inglês", profissao: "" },
    { RA: "es", nome: "Espanhol", profissao: "" },
  ];

  const cadastrarUsuario = (e) => {
    e.preventDefault();
    navigate("/CadastroUsuario");
  };

  async function AtualizarUsuario(idCliente, dado) {
    try {
      navigate(
        `/AtualizarUsuario/${idCliente}?dado=${encodeURIComponent(
          JSON.stringify(dado)
        )}`
      );
    } catch (error) {
      console.error(error);
    }
  }

  const selectBD = cliente.filter((cliente) => {
    if (cliente.nome !== null) {
      cliente.nome.toLowerCase().includes(procura.toLowerCase());
    } else if (cliente.RA !== null) {
      cliente.RA.toLowerCase().includes(procura.toLowerCase());
    } else {
      cliente.dataNasc.toLowerCase().includes(procura.toLowerCase());
    }
  });

  const deleteBD = async (idcliente) => {
    try {
      const resposta = await fetch(
        `http://127.0.0.1:3000/api/usuario/${idcliente}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!resposta.ok) {
        console.error(resposta);
        const texto = await resposta.text();
        console.log(texto);
      } else {
        setDeletados((prevDeletados) => [...prevDeletados, idcliente]);
        const novosDados = {
          ...dados,
          cliente: dados.cliente?.filter(
            (dado) => dado.idcliente !== idcliente
          ),
        };
        adicionarDados(novosDados);

        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen h-screen">
      <Pagina>
        <div className="flex flex-row h-screen font-poppins w-screen">
          <Menu />
          <div className="flex flex-col justify-center items-center w-full">
            <div className="bg-[#03588C] flex flex-col items-center shadow-xl rounded-xl p-8 w-full max-w-5xl min-h-fit">
            <h1 className="text-4xl font-bold text-center">Lista de Usuários</h1>
              <span className="w-110 flex flex-row  justify-center rounded-2xl mt-10">
                <input
                  type="text"
                  className="w-96 h-5 p-4 bg-white focus:outline-none rounded-l-2xl text-black"
                  onChange={(e) => setProcura(e.target.value)}
                  placeholder="Buscar usuário..."
                />
                <div className="border-4 bg-white rounded-r-2xl">
                  {" "}
                  <Search className="text-black " />{" "}
                </div>
              </span>

              {dados.cliente?.map((dado) => (
                <div key={dado.ra} className="w-1/2">
                  <div className="h-15 w-full flex justify-evenly rounded-2xl mt-5 bg-[#48D1A0]/45 items-center">
                    {dado.nomecliente}, {dado.ra}, {dado.idprofissao}
                    <span className="flex flex-row">
                      <Trash2
                        className="cursor-pointer"
                        onClick={() => deleteBD(dado.idcliente)}
                      />
                      <NotebookPen
                        className="cursor-pointer"
                        onClick={() => AtualizarUsuario(dado.idcliente, dado)}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <footer className="mt-[50px]">
              <button
                className="bg-[#11a3b2] h-12  rounded-3xl w-55 cursor-pointer "
                type="submit"
                onClick={cadastrarUsuario}
              >
                <strong>Cadastrar</strong>
              </button>
            </footer>
          </div>
        </div>
      </Pagina>
    </div>
  );
}
