import React, { useState } from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Titulo from "@/components/Titulo";
import CampoTexto from "@/components/CampoTexto";
import Botao from "@/components/Botao";
import { useCarrinhoContext } from "@/hooks/useCarrinhoContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { carrinho, valorTotal, limparCarrinho } = useCarrinhoContext();
  const [form, setForm] = useState({
    nome: "",
    endereco: "",
    cidade: "",
    cep: "",
    numeroCartao: "",
    validade: "",
    cvc: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const pedidoRes = await fetch("/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itens: carrinho, entrega: form }),
      });
      const pedido = await pedidoRes.json();

      await fetch("/api/pagamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pedidoId: pedido.id, amount: valorTotal }),
      });

      limparCarrinho();
      navigate("/confirmacao");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <BarraNavegacao />
      <main className="container-xxl">
        <Titulo element="h1" className="text-center fw-semibold my-3 my-md-5">
          Checkout
        </Titulo>
        <form className="text-light mx-md-4 mx-xl-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <CampoTexto
              name="nome"
              placeholder="Nome completo"
              value={form.nome}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CampoTexto
              name="endereco"
              placeholder="Endereço"
              value={form.endereco}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CampoTexto
              name="cidade"
              placeholder="Cidade"
              value={form.cidade}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CampoTexto
              name="cep"
              placeholder="CEP"
              value={form.cep}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CampoTexto
              name="numeroCartao"
              placeholder="Número do cartão"
              value={form.numeroCartao}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CampoTexto
              name="validade"
              placeholder="Validade"
              value={form.validade}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CampoTexto
              name="cvc"
              placeholder="CVC"
              value={form.cvc}
              onChange={handleChange}
            />
          </div>
          <Botao type="submit" variant="primary" className="border-0">
            Pagar
          </Botao>
        </form>
      </main>
    </>
  );
};

export default Checkout;

