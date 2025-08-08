import React from "react";

import BarraNavegacao from "@/components/BarraNavegacao";
import CarrinhoSuspenso from "@/components/CarrinhoSuspenso";
import Rodape from "@/components/Rodape";
import Titulo from "@/components/Titulo";

const Lojas = () => {
  return (
    <>
      <BarraNavegacao />
      <CarrinhoSuspenso />
      <main>
        <Titulo element="h1">Lojas</Titulo>
      </main>
      <Rodape />
    </>
  );
};

export default Lojas;

