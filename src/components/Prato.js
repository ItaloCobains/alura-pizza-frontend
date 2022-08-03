import "./prato.css";

const Prato = ({ nome, descricao, image, preco }) => {
  return (
    <div className="prato">
      <div className="imagem-container">
        <img src={image} alt={descricao} />
      </div>
      <div className="conteudo">
        <p className="nome">
          <strong>{nome}</strong>
        </p>
        <p className="descricao">{descricao}</p>
        <p className="preco">
          R$ <strong>{preco}</strong>
        </p>
      </div>
    </div>
  );
};

export default Prato;
