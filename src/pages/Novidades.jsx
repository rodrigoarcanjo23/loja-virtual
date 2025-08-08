import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Rodape from "@/components/Rodape";
import ProdutosNovos from "@/components/ProdutosNovos";
import NovidadesNewsletter from "@/components/Novidades";

const Novidades = () => {
  return (
    <>
      <BarraNavegacao />
      <ProdutosNovos />
      <NovidadesNewsletter />
      <Rodape />
    </>
  );
};

export default Novidades;
