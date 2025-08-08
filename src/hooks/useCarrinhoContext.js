import { useContext } from "react";
import { CarrinhoContext } from '@/context/CarrinhoContext';
import { AuthContext } from '@/context/AuthContext';
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
    const { carrinho, dispatch, quantidade, valorTotal } = useContext(CarrinhoContext);
    const { token } = useContext(AuthContext);

    async function adicionarProduto(novoProduto) {
        dispatch(addProdutoAction(novoProduto));
        if (token) {
            await fetch('/api/carrinho', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ produtoId: novoProduto.id, quantidade: 1 }),
            });
        }
    }

    async function removerProduto(id) {
        const produto = carrinho.find((itemDoCarrinho) => itemDoCarrinho.id === id);
        if (!produto) return;

        if (produto.quantidade <= 1) {
            dispatch(removeProdutoAction(id));
            if (token) {
                await fetch(`/api/carrinho/${id}`, {
                    method: 'DELETE',
                    headers: { Authorization: `Bearer ${token}` },
                });
            }
        } else {
            dispatch(updateQuantidadeAction(id, produto.quantidade - 1));
            if (token) {
                await fetch('/api/carrinho', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ produtoId: id, quantidade: -1 }),
                });
            }
        }
    }

    async function removerProdutoCarrinho(id) {
        dispatch(removeProdutoAction(id));
        if (token) {
            await fetch(`/api/carrinho/${id}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${token}` },
            });
        }
    }

    return {
        carrinho,
        adicionarProduto,
        removerProduto,
        removerProdutoCarrinho,
        valorTotal,
        quantidade,
    };
};
