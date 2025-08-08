import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Titulo from "@/components/Titulo";

const Confirmacao = () => (
  <>
    <BarraNavegacao />
    <main className="container-xxl">
      <Titulo element="h1" className="text-center fw-semibold my-3 my-md-5">
        Pedido confirmado!
      </Titulo>
      <p className="text-center text-light">Obrigado pela sua compra.</p>
    </main>
  </>
);

export default Confirmacao;

