import React from "react";
import Produto from "./Produto";
import produtosMock from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";

const filtrarProdutos = (produtos, filtro) => {
  if (typeof filtro === "function") return produtos.filter(filtro);
  if (filtro && typeof filtro === "object")
    return produtos.filter((produto) =>
      Object.entries(filtro).every(([chave, valor]) => produto[chave] === valor)
    );
  return produtos;
};

const Produtos = ({
  titulo,
  filtro,
  produtos = produtosMock,
}) => {
  const { adicionarProduto } = useCarrinhoContext();
  const produtosFiltrados = filtrarProdutos(produtos, filtro);
  return (
    <section role="produtos" aria-label={titulo}>
      <Titulo>{titulo}</Titulo>
      <div className="container row mx-auto">
        {produtosFiltrados.map((produto) => (
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
