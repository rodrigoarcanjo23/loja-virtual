import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Rodape from "@/components/Rodape";
import CarrinhoSuspenso from "@/components/CarrinhoSuspenso";
import Titulo from "@/components/Titulo";
import Produtos from "@/components/Produtos";

const Promocoes = () => {
  return (
    <>
      <BarraNavegacao />
      <main>
        <CarrinhoSuspenso />
        <Titulo element="h1" className="text-center fw-semibold my-3 my-md-5">
          Promoções
        </Titulo>
        <Produtos />
      </main>
      <Rodape />
    </>
  );
};

export default Promocoes;
