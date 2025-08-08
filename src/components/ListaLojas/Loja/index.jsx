import React from "react";

const Loja = ({ nome, endereco, imagem }) => {
  return (
    <div className="col">
      <div className="card h-100 rounded-0 border-0">
        <img src={imagem} alt={nome} className="card-img-top" />
        <div className="card-body bg-light">
          <h5 className="card-title">{nome}</h5>
          <p className="card-text">{endereco}</p>
        </div>
      </div>
    </div>
  );
};

export default Loja;
