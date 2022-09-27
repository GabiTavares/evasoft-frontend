import './styles/main.css'
import Menu from './pages/menu';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './pages/login';
import CadastroEquip from "./pages/cadastro";
import CadFinal from "./pages/cadFinalizado";
import ConsultCat from './pages/catálogo';
import Diagnostico from './pages/falhas';
import { SenhaNova } from './pages/recSenha';

function App() {

  return (
      <BrowserRouter> 
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<CadastroEquip />} />
        <Route path="/cadFinal" element={<CadFinal />} />
        <Route path="/consulta" element={<ConsultCat />} />
        <Route path="/falhas" element={<Diagnostico />} />
        <Route path="/esqueceu_senha" element={<SenhaNova />} />
      </Routes>
      </BrowserRouter>
      
      
    
  );
}

export default App
