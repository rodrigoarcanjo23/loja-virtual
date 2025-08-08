import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Rodape from "@/components/Rodape";
import ListaLojas from "@/components/ListaLojas";

const Lojas = () => {
  return (
    <>
      <BarraNavegacao />
      <main>
        <ListaLojas />
      </main>
      <Rodape />
    </>
  );
};

export default Lojas;
