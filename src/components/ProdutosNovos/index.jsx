import React from "react";
import Produto from "@/components/Produtos/Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";

const ProdutosNovos = () => {
  const { adicionarProduto } = useCarrinhoContext();
  const produtosNovos = produtos.filter((produto) => produto.novo);

  return (
    <section role="novidades" aria-label="Produtos recém chegados">
      <Titulo>Novidades</Titulo>
      <div className="container row mx-auto">
        {produtosNovos.map((produto) => (
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

export default ProdutosNovos;
