import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Rodape from "@/components/Rodape";
import CarrinhoSuspenso from "@/components/CarrinhoSuspenso";
import ProdutosNovos from "@/components/ProdutosNovos";

const Novidades = () => (
  <>
    <BarraNavegacao />
    <CarrinhoSuspenso />
    <main>
      <ProdutosNovos />
    </main>
    <Rodape />
  </>
);

export default Novidades;
