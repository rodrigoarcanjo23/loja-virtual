import React from "react";
import Produtos from ".";

const ProdutosNovos = (props) => (
  <Produtos titulo="Novidades" filtro={(p) => p.novo} {...props} />
);

export default ProdutosNovos;
