import React from 'react'
import api from './api';
import './styles/main.css'
import CadFinal from './pages/cadFinalizado'
import CadastroEquip from './pages/cadastro'
import ConsultCat from './pages/catálogo'
import Diagnostico from './pages/falhas'
import Menu from './pages/menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
    
  async componentDidMount() {
    const response = await api.get('http://localhost:5000/api/marca')
    const response2 = await api.get('http://localhost:5000/api/modelo')
    const response3 = await api.get('http://localhost:5000/api/motor')
    const response4 = await api.get('http://localhost:5000/api/ano')
    const response5 = await api.get('http://localhost:5000/api/falha')
    const response6 = await api.get('http://localhost:5000/api/catalogo')
    
    //console.log(response.data)
    // console.log(response2.data)
    // console.log(response3.data)
    // console.log(response4.data)
    
    
    this.setState({
      marca: response.data,
      modelo: response2.data,
      motor: response3.data,
      ano: response4.data,
      causa: response5.data,
      sintoma: response5.data,
      marcaCat: response6.data,
      codigo: response6.data,
      componente: response6.data,
      sistema: response6.data,
    })
  }
  
  state = {
    marca: [],
    modelo:[],
    ano:[],
    motor:[],
    causa: [],
    sintoma: [],
    codigo: [],
    componente: [],
    sistema: [],
    marcaCat: [],

  }
  render(){
    

    const vArray = this.state;
    console.log(vArray)
    if (vArray.marca.length > 0) {
      return(
      <div>
        <Router>
          <Routes>
            <Route path='/' exact element={<Menu />} />
            <Route path='/cadastro' element={<CadastroEquip options={vArray} />}/>
            <Route path='/cadastro_finalizado' element={<CadFinal />}/>
            <Route path='/catalogo' element={<ConsultCat options={vArray} />}/>
            <Route path='/falha' element={<Diagnostico options={vArray} />}/>
          </Routes>
        </Router>
        
      </div>
      )
    }
  }
}


export default App;

