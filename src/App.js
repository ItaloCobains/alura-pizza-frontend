import { useEffect, useState } from "react";
import "./App.css";
import Prato from "./components/Prato";

function App() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    fetch("https://alura-pizza-api.herokuapp.com/api/pratos/")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setPratos(dados);
      });
  }, []);

  return (
    <div className="App">
      <div className="banner-container">
        <img src="/img/banner.png" alt="Um banner mostrando uma pizza" />
      </div>
      <div className="logo-container">
        <img src="/img/logo.png" alt="Logo da alura pizza" />
      </div>
      <section className="cardapio">
        {pratos.map((prato) => (
          <Prato
            key={prato.div}
            nome={prato.nome}
            descricao={prato.descricao}
            image={prato.image}
            preco={prato.preco}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
