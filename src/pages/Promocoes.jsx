import React from "react";

import BarraNavegacao from "@/components/BarraNavegacao";
import CarrinhoSuspenso from "@/components/CarrinhoSuspenso";
import Rodape from "@/components/Rodape";
import Titulo from "@/components/Titulo";

const Promocoes = () => {
  return (
    <>
      <BarraNavegacao />
      <CarrinhoSuspenso />
      <main>
        <Titulo element="h1">Promoções</Titulo>
      </main>
      <Rodape />
    </>
  );
};

export default Promocoes;

