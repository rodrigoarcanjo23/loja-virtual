import React from "react";

import BarraNavegacao from "@/components/BarraNavegacao";
import CarrinhoSuspenso from "@/components/CarrinhoSuspenso";
import Rodape from "@/components/Rodape";
import NovidadesSection from "@/components/Novidades";

const Novidades = () => {
  return (
    <>
      <BarraNavegacao />
      <CarrinhoSuspenso />
      <main>
        <NovidadesSection />
      </main>
      <Rodape />
    </>
  );
};

export default Novidades;

