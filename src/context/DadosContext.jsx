import { createContext, useContext, useEffect, useState } from "react";

export const DadosContext = createContext();

export function DadosProvider({ children }) {
  const [dados, setDados] = useState({})
  function adicionarDados(novosDadosPorTabela) {
    setDados((prev) => {
      const novoEstado = { ...prev };
      for (const [tabela, registros] of Object.entries(novosDadosPorTabela)) {
        if (!Array.isArray(registros)) continue;
        const existentes = new Set(
          (novoEstado[tabela] || []).map((item) => JSON.stringify(item))
        );
        const novosUnicos = registros.filter(
          (item) => !existentes.has(JSON.stringify(item))
        );
        novoEstado[tabela] = [...(novoEstado[tabela] || []), ...novosUnicos];
      }
      return novoEstado;
    });
  }
  

  useEffect(() => {
    const fetchAPI = async () => {
      try { 
        const response = await fetch("http://127.0.0.1:3000/api/usuario");
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados do servidor");
        }


        const json = await response.json();
        console.log(json);
        adicionarDados(json.message);

        // Object.entries(tabelas).forEach(([nomeTabela, conteudo]) => {
        //   const columns = conteudo?.data?.columns;
        //   const rows = conteudo?.data?.rows;

        //   const dadosFormatados = rows.map((linha) => {
        //     const obj = { __tabela: nomeTabela };
        //     columns.forEach((coluna, index) => {
        //       obj[coluna] = linha[index];
        //     });
        //     return obj;
        //   });


        // });
        // const todasAsTabelas = Object.values(json.message).flat(); // Junta todos os arrays
        // adicionarDados(todasAsTabelas);


      } catch (err) {
        console.error("❌ Erro na requisição:", err.message);
      }
    };

    fetchAPI();
  }, []);


  const exportar = {
    dados,
    adicionarDados
  };

  return (
    <DadosContext.Provider value={exportar}>{children}</DadosContext.Provider>
  );
}