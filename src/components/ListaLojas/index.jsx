import React from "react";
import Titulo from "@/components/Titulo";
import lojas from "@/mocks/lojas.json";
import Loja from "./Loja";

const ListaLojas = () => {
  return (
    <section role="lojas" aria-label="Conheça nossas lojas físicas">
      <Titulo>Nossas Lojas</Titulo>
      <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-auto">
        {lojas.map((loja) => (
          <Loja key={loja.id} {...loja} />
        ))}
      </div>
    </section>
  );
};

export default ListaLojas;
