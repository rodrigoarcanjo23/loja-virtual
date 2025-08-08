import React from "react";
import Produtos from ".";

const ProdutosPromocoes = (props) => (
  <Produtos titulo="Promoções" filtro={(p) => p.promocao} {...props} />
);

export default ProdutosPromocoes;
