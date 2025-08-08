import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";
import Lojas from "./pages/Lojas";

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
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </CarrinhoProvider>

    </BrowserRouter>
  );
}

export default App;
