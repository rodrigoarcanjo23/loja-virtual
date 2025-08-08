import React, { useContext } from "react";
import Botao from "@/components/Botao";
import ResumoCompra from "./ResumoCompra";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";

const Sumario = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  const { carrinho } = useCarrinhoContext();

  const finalizar = async () => {
    if (!token) {
      navigate('/login');
      return;
    }
    await fetch('/api/pedidos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ itens: carrinho }),
    });
    navigate('/');
  };

  return (
    <div className="d-flex flex-column gap-3 sumario">
      <ResumoCompra />
      <div className="d-flex flex-column flex-md-row gap-2 mx-1 mx-lg-0 justify-content-between justify-content-md-evelyn">
        <Botao
          variant="tertiary"
          aria-label="Continuar comprando"
          onClick={() => navigate("/")}
        >
          Continuar comprando
        </Botao>
        <Botao
          variant="primary"
          className="border-0"
          aria-label="Finalizar compra"
          onClick={finalizar}
        >
          Finalizar compra
        </Botao>
      </div>
    </div>
  );
};

export default Sumario;
