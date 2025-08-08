import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Rodape from "@/components/Rodape";
import CarrinhoSuspenso from "@/components/CarrinhoSuspenso";
import Titulo from "@/components/Titulo";
import Novidades from "@/components/Novidades";

const NovidadesPage = () => {
  return (
    <>
      <BarraNavegacao />
      <main>
        <CarrinhoSuspenso />
        <Titulo element="h1" className="text-center fw-semibold my-3 my-md-5">
          Novidades
        </Titulo>
        <Novidades />
      </main>
      <Rodape />
    </>
  );
};

export default NovidadesPage;
