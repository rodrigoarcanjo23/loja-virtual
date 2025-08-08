import React, { useEffect, useState } from "react";
import Produto from "./Produto";
import Titulo from "@/components/Titulo";
import { useCarrinhoContext } from '@/hooks/useCarrinhoContext';

const Produtos = () => {
  const { adicionarProduto } = useCarrinhoContext();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('/api/produtos')
      .then((res) => res.json())
      .then((dados) => setProdutos(dados));
  }, []);

  return (
    <section role="produtos" aria-label="Produtos que estão bombando!">
      <Titulo>Produtos que estão bombando!</Titulo>
      <div className="container row mx-auto">
        {produtos.map((produto) => (
          <Produto
            key={produto._id}
            id={produto._id}
            {...produto}
            adicionarProduto={adicionarProduto}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;
