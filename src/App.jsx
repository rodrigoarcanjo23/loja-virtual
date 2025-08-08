import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";
import Login from "./pages/Login";

import "./App.css";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <CarrinhoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PaginaErro />} />
          </Routes>
        </CarrinhoProvider>
      </AuthProvider>

    </BrowserRouter>
  );
}

export default App;
