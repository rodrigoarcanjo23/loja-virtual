import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Rodape from "@/components/Rodape";
import CarrinhoSuspenso from "@/components/CarrinhoSuspenso";
import ProdutosPromocoes from "@/components/ProdutosPromocoes";

const Promocoes = () => (
  <>
    <BarraNavegacao />
    <CarrinhoSuspenso />
    <main>
      <ProdutosPromocoes />
    </main>
    <Rodape />
  </>
);

export default Promocoes;
