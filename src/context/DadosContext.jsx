import { createContext, useContext, useEffect, useState } from "react";

export const DadosContext = createContext();

export function DadosProvider({ children }) {
  const [dados, setDados] = useState([])
  function adicionarDados(novosDados) {
    setDados((prev) => {
      const existentes = new Set(prev.map((item) => JSON.stringify(item)));
      const novosUnicos = novosDados.filter(
        (item) => !existentes.has(JSON.stringify(item))
      );
      const atualizados = [...prev, ...novosUnicos];
      return atualizados;
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
        if (Array.isArray(json.message)) {
          adicionarDados(json.message);
        } else {
          console.error("Formato inesperado da resposta:", json);
        }



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