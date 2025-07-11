import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import imagemLogin from "../assets/imagemLogin.png";
import { Search, StepBack, StepForward } from "lucide-react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DadosContext } from "../context/DadosContext";
export function Emprestimo3() {
  const { isbn, idautor } = useParams()
  const { dados, adicionarDados } = useContext(DadosContext)
  const navigate = useNavigate()
  const [procura, setProcura] = useState("")
  const [deletados, setDeletados] = useState([])

  const livro = dados.livro?.find(l => l.isbn === isbn);
  const autor = dados.autor?.find(a => String(a.idautor) === idautor);

  function getData() {
    const agora = new Date();

    const horaBrasilia = new Date(agora.getTime() - 60000);

    const ano = horaBrasilia.getFullYear();
    const mes = String(horaBrasilia.getMonth() + 1).padStart(2, '0');
    const dia = String(horaBrasilia.getDate()).padStart(2, '0');
    const hora = String(horaBrasilia.getHours()).padStart(2, '0');
    const minuto = String(horaBrasilia.getMinutes()).padStart(2, '0');
    const segundo = String(horaBrasilia.getSeconds()).padStart(2, '0');
    const hoje = `${ano}-${mes}-${dia} ${hora}:${parseInt(minuto) + 1}:${segundo}`;

    return hoje;
  }
  const hoje = getData()
  const [novoEmprestimo, setNovoEmprestimo] = useState({ ISBN: isbn, status: true, idCliente: "", dataEmprestimo: hoje, email: "", qtdemprestimo: "" });
  
  useEffect(() => {
    const cliente = dados.cliente?.find(c => String(c.idcliente) === String(novoEmprestimo.idCliente));
    if (cliente) {
      setNovoEmprestimo(prev => ({ ...prev, email: cliente.email, qtdemprestimo: cliente.qtdemprestimo }));
    }
  }, [novoEmprestimo.idCliente, dados.cliente]);
  
  async function criarEmprestimo(e) {
    e.preventDefault();
    
    try {
      if (!novoEmprestimo.idCliente) {
        alert("Preencha todos os campos!")
        return
      }
      if (novoEmprestimo.qtdemprestimo > 3) {
        alert("Usuario nao pode mais emprestar")
        return
      }
      if (livro?.qtdestoque < 1) {
        alert("Livro indisponível para empréstimo!")
        return
      }

      const response = await fetch(`http://127.0.0.1:3000/api/emprestimo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoEmprestimo),
      })

      if (!response.ok) {
        throw new Error(`Erro ao emprestar: ${response.statusText}`)
      }


      const dados = await response.json()
      window.location.reload()
      navigate("/emprestimo")

    } catch (error) {
      console.error(error)
    }
  }

  function cancela() {
    navigate("/emprestimo")
  }

  return (
    <div className="w-screen h-screen">
      <Pagina>
        <div className="flex h-screen font-poppins w-screen">
          <Menu />
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="bg-[#03588C] flex flex-col items-center w-[70vw] h-[85vh] rounded-2xl">
              <span className="flex flex-row">
                <div>
                  <img src={`http://localhost:3000/${livro?.imagemcapa}`} alt={livro?.titulo} className="w-[25vw] h-[75vh] m-6" />
                </div>
                <span className="bg-[#48D1A0]/45 w-[35vw] h-[75vh] mt-5 rounded-2xl flex flex-col justify-center items-center">
                  <select className="border-1 w-[30vw]" name="cliente" id="cliente" value={novoEmprestimo.idCliente} onChange={(e) => setNovoEmprestimo({ ...novoEmprestimo, idCliente: e.target.value})}>
                    <option className="bg-white" value="" disabled hidden>
                      Selecione um cliente...
                    </option>
                    {dados.cliente?.map((u) => (

                      <option className="text-black border-1" key={u?.idcliente} value={u?.idcliente}>
                        {u?.nomecliente}
                      </option>
                    ))
                    }
                  </select>
                  <p className="mt-5 w-[30vw] border-1">Autor: {autor?.nomeautor}</p>
                  <p className="mt-5 w-[30vw] border-1">Quantidade disponível: {livro?.qtdestoque}</p>
                  <div className="mt-5 w-96 h-50 bg-gray-200 text-black rounded-2xl p-2">{livro?.resumo}</div>
            <div className="mt-5 flex flex-row justify-evenly w-full">
            <button
              onClick={cancela}
                className="bg-red-600 h-12 rounded-3xl w-44 text-white font-semibold"
                type="submit"
              >
                Cancelar
              </button>
              <button
              onClick={criarEmprestimo}
                className="bg-[#FFA500] h-12 rounded-3xl w-44 text-white font-semibold"
                type="submit"
              >
                Emprestar
              </button>
            </div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </Pagina>
    </div>
  );
}
