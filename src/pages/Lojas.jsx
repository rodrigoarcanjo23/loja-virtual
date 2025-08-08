import React from "react";
import BarraNavegacao from "@/components/BarraNavegacao";
import Rodape from "@/components/Rodape";
import CarrinhoSuspenso from "@/components/CarrinhoSuspenso";
import Titulo from "@/components/Titulo";
import CampoTexto from "@/components/CampoTexto";
import Botao from "@/components/Botao";

const Lojas = () => {
  return (
    <>
      <BarraNavegacao />
      <main>
        <CarrinhoSuspenso />
        <section className="container">
          <Titulo element="h1" className="text-center fw-semibold my-3 my-md-5">
            Lojas
          </Titulo>
          <form className="row justify-content-center">
            <div className="col-12 col-md-6">
              <div className="input-group my-3">
                <CampoTexto
                  type="text"
                  placeholder="Digite sua cidade"
                  aria-label="Digite sua cidade"
                />
                <Botao variant="primary" type="button" className="border-0">
                  Buscar
                </Botao>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Rodape />
    </>
  );
};

export default Lojas;
