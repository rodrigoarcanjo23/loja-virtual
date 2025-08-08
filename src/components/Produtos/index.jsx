import React, { useEffect, useState } from "react";
import Produto from "./Produto";
import Titulo from "@/components/Titulo";
import { useCarrinhoContext } from '@/hooks/useCarrinhoContext';
import api from "@/services/api";

const Produtos = () => {
  const { adicionarProduto } = useCarrinhoContext();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const resposta = await api.get("/produtos");
        setProdutos(resposta.data);
      } catch (e) {
        setErro("Erro ao carregar produtos.");
      } finally {
        setLoading(false);
      }
    };

    carregarProdutos();
  }, []);

  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {loading && <p>Carregando...</p>}
        {erro && <p>{erro}</p>}
        {!loading && !erro &&
          produtos.map((produto) => (
            <Produto
              key={produto.id}
              {...produto}
              adicionarProduto={adicionarProduto}
            />
          ))}
      </div>
    </section>
  );
};

export default Produtos;
