import React from "react";
import Produto from "@/components/Produtos/Produto";
import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";

const ProdutosPromocoes = () => {
  const { adicionarProduto } = useCarrinhoContext();
  const produtosPromocao = produtos.filter((produto) => produto.promocao);

  return (
    <section role="produtos-promocao" aria-label="Produtos em promoção">
      <Titulo>Promoções</Titulo>
      <div className="container row mx-auto">
        {produtosPromocao.map((produto) => (
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

export default ProdutosPromocoes;
