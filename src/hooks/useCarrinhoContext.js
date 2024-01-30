import { useContext, useEffect, useMemo } from "react";
import { CarrinhoContext } from '@/context/CarrinhoContext';
import { ADD_PRODUTO, REMOVE_PRODUTO, UPDATE_QUANTIDADE } from "../reduces/carrinhoReducer";

const addProdutoAction = (novoProduto) => ({
    type: ADD_PRODUTO,
    payload: novoProduto,
});

const removeProdutoAction = (produtoId) => ({
    type: REMOVE_PRODUTO,
    payload: produtoId,
  });
  
  const updateQuantidadeAction = (produtoId, quantidade) => ({
    type: UPDATE_QUANTIDADE,
    payload: { produtoId, quantidade },
  });
  

export const useCarrinhoContext = () => {
    const { carrinho, dispatch, quantidade, valorTotal } =
        useContext(CarrinhoContext);

  

    function adicionarProduto(novoProduto) {
        dispatch(addProdutoAction(novoProduto))
    }

    function removerProduto(id) {
        const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
        const ehOUltimo = produto.quantidade === 1;
        if (ehOUltimo) {
            return setCarrinho((carrinhoAnterior) =>
                carrinhoAnterior.filter((itemDoCarrinho) => itemDoCarrinho.id !== id)
            );
        }

        const carrinhoAtualzado = mudarQuantidade(id, -1)

        setCarrinho([...carrinhoAtualzado])
    }

    function removerProdutoCarrinho(id) {
        const produto = carrinho.filter((itemDoCarrinho) => itemDoCarrinho.id !== id);
        setCarrinho(produto);
    }

    return {
        carrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho,
        valorTotal,
        quantidade,
    };

}