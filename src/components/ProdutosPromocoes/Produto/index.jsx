import Botao from "@/components/Botao";
import { formatadorMoeda } from "@/utils/formatadorMoeda";

const ProdutoPromocao = ({
  src,
  alt,
  id,
  titulo,
  descricao,
  preco,
  precoOriginal,
  adicionarProduto,
}) => {
  const desconto = Math.round(((precoOriginal - preco) / precoOriginal) * 100);

  return (
    <div className="col-12 col-md-6 col-xxl-4 pb-4">
      <div className="card">
        <img className="img-fluid" src={src} alt={alt} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{titulo}</h5>
          <p className="card-text">{descricao}</p>
          <span className="badge bg-danger mb-2">-{desconto}%</span>
          <p className="fw-bold">
            <span className="text-decoration-line-through text-muted me-2">
              {formatadorMoeda(precoOriginal)}
            </span>
            {formatadorMoeda(preco)}
          </p>

          <Botao
            variant="primary"
            type="button"
            className="border-0"
            handleClick={() =>
              adicionarProduto({
                src,
                alt,
                id,
                titulo,
                descricao,
                preco,
              })
            }
          >
            Adicionar ao carrinho
          </Botao>
        </div>
      </div>
    </div>
  );
};

export default ProdutoPromocao;
