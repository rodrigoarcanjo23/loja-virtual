import { createContext, useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer, LIMPAR_CARRINHO } from "../reduces/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(
    carrinhoReducer,
    estadoInicial,
    () => {
      const carrinhoLocalStorage = localStorage.getItem("carrinho");
      return carrinhoLocalStorage
        ? JSON.parse(carrinhoLocalStorage)
        : estadoInicial;
    }
  );
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

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
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  }, [carrinho]);

  const limparCarrinho = () => {
    dispatch({ type: LIMPAR_CARRINHO });
    localStorage.removeItem("carrinho");
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        quantidade,
        valorTotal,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
