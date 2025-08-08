import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Lojas from "./pages/Lojas";
import Promocoes from "./pages/Promocoes";
import Novidades from "./pages/Novidades";
import PaginaErro from "./pages/PaginaErro";

import "./App.css";
import { CarrinhoProvider } from "./context/CarrinhoContext";

function App() {

  return (
    <BrowserRouter>
      <CarrinhoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/lojas" element={<Lojas />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoProvider>

    </BrowserRouter>
  );
}

export default App;
