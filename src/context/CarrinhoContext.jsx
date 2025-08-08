import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer, SET_CARRINHO } from "../reduces/carrinhoReducer";
import { AuthContext } from "./AuthContext";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);
    const { token } = useContext(AuthContext);

    const { totalTemp, quantidadeTemp } = useMemo(() => {
        return carrinho.reduce(
            (acumulador, produto) => ({
                quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
                totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
            }),
            {
                quantidadeTemp: 0,
                totalTemp: 0,
            }
        );
    }, [carrinho]);

    useEffect(() => {
        setQuantidade(quantidadeTemp);
        setValorTotal(totalTemp);
    }, [quantidadeTemp, totalTemp]);

    useEffect(() => {
        async function carregar() {
            if (!token) return;
            const resp = await fetch('/api/carrinho', {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (resp.ok) {
                const dados = await resp.json();
                const itens = dados.map((item) => ({
                    id: item.produto._id,
                    titulo: item.produto.titulo,
                    descricao: item.produto.descricao,
                    preco: item.produto.preco,
                    src: item.produto.src,
                    alt: item.produto.alt,
                    quantidade: item.quantidade,
                }));
                dispatch({ type: SET_CARRINHO, payload: itens });
            }
        }
        carregar();
    }, [token]);

    return (
        <CarrinhoContext.Provider value={{
            carrinho,
            dispatch,
            quantidade,
            valorTotal,
        }}>
            {children}
        </CarrinhoContext.Provider>
    );
};
