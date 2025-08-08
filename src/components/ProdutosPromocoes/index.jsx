import produtos from "@/mocks/produtos.json";
import Titulo from "@/components/Titulo";
import ProdutoPromocao from "./Produto";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";

const ProdutosPromocoes = () => {
  const { adicionarProduto } = useCarrinhoContext();
  const produtosEmPromocao = produtos.filter((produto) => produto.promocao);

  return (
    <section role="promocoes" aria-label="Produtos em promoção">
      <Titulo>Promoções</Titulo>
      <div className="container row mx-auto">
        {produtosEmPromocao.map((produto) => (
          <ProdutoPromocao
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
