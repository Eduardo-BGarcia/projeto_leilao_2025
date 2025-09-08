import './App.css';
import Calculadora from './pages/calculadora/Calculadora';
import Home from './pages/home/Home';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import RotaPrivadaLayout from './components/layout/RotaPrivadaLayout';
import PadraoLayout from './components/layout/PadraoLayout';
import Perfil from './pages/perfil/Perfil';
import CadastroLeiloes from './pages/cadastroLeiloes/CadastroLeiloes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RotaPrivadaLayout/>}>
            <Route path='/' element={<PadraoLayout>
              <Home/>
            </PadraoLayout>} />
            <Route path='/perfil' element={<PadraoLayout>
              <Perfil />
            </PadraoLayout>} />
          </Route>          
          
          <Route path='/login' Component={() => <Login />} />
          <Route path='/cadastro-usuario' Component={CadastroUsuario} />
          <Route path='/home' Component={Home} />
          <Route path='/cadastro-leiloes' Component={CadastroLeiloes} />
          <Route path='/calculadora' Component={Calculadora} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
