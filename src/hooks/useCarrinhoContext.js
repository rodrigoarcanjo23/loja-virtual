import { useContext } from "react";
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
        if (!produto) return;

        if (produto.quantidade <= 1) {
            dispatch(removeProdutoAction(id));
        } else {
            dispatch(updateQuantidadeAction(id, produto.quantidade - 1));
        }
    }

    function removerProdutoCarrinho(id) {
        dispatch(removeProdutoAction(id));
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
