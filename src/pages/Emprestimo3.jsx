import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";
import imagemLogin from "../assets/imagemLogin.png";
import { Search, StepBack, StepForward } from "lucide-react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DadosContext } from "../context/DadosContext";
export function Emprestimo3() {
  const { isbn, idautor, ra } = useParams()
  const { dados, adicionarDados } = useContext(DadosContext)
  const navigate = useNavigate()
  const [procura, setProcura] = useState("")
  const [deletados, setDeletados] = useState([])

  const livro = dados.livro?.find(l => l.isbn === isbn);
  const autor = dados.autor?.find(a => String(a.idautor) === idautor);
  const cliente = dados.cliente?.find(u => String(u.ra) === ra);
  console.log("isb", isbn);
  console.log("idautor", idautor);
  console.log("livro", livro);
  console.log("autor", autor);

  const [novoEmprestimo, setNovoEmprestimo] = useState({ ISBN: "", status: "", idCliente: "", dataEmprestimo: ""});

      async function criarEmprestimo(e) {
        e.preventDefault();
        try {
            if (!novoEmprestimo.isbn || !novoEmprestimo.status || !novoEmprestimo.idlCiente || !novoEmprestimo.dataEmprestimo) {
                alert("Preencha todos os campos!")
                return
            }


            const response = await fetch(`http://127.0.0.1:3000/cadastroUsuario`, {
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
            console.log(dados)
            navigate("/emprestimo")
            window.location.reload

            setnovoEmprestimo({ ISBN: "", status: "", idCliente: "", dataEmprestimo: "" })
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
            <div className="flex flex-row items-center mb-8">
                <div>
                    <img src={`http://localhost:3000/${livro?.imagemcapa}`} alt={livro?.titulo} className="w-72 m-6" />
                    <p className="text-center">{livro?.qtdestoque}</p>
                </div>
              <div className="flex flex-col">
                <p className="mb-5">{autor?.nomeautor}</p>
                <p className="w-72 h-auto">
                  {livro?.resumo}
                </p>
              </div>
              <select name="cliente" id="cliente">
                <option value="">selecione </option>
                  {dados.cliente?.map((u) => (
                    <option key={u?.ra} value={u?.ra}>
                      {u?.nomecliente}
                    </option>
                  ))
                  }


              </select>
            </div>
            <div className="flex flex-row gap-20">
              <button
              onClick={cancela}
                className="bg-[#6b0808] h-12 rounded-3xl w-44 text-white font-semibold"
                type="submit"
              >
                Cancelar
              </button>
              <button
              onClick={criarEmprestimo}
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
