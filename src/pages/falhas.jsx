import { Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination, 
  TableRow } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/style_cat.css';
import shadows from '@mui/material/styles/shadows';

export default function Diagnostico({options}) {
  //Select: 

const [marca, setMarca] = useState();
const [values, setValues] = useState();
const handleChangesValues = (event) => {
  setValues((prevValue) => ({
    ...prevValue,
    [event.target.name]: event.target.value}))
}

const handleSubmit = (event) => {
  event.preventDefault();

}

//Paginação
const [page, setPage] = useState(0);
const [rowsPerPage, setRowsPerPage] = useState(10);


const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(+event.target.value);
  setPage(0);
};

//filtro
const [busca, setBusca] = useState('');

//Show Table
const [showtable, setShowTable] = useState('');

const handleShowTable = () => {
  const getMarca = values.marca;
  setShowTable(getMarca);
}

//procura pelo botão para aparecer tabela
const handleSearch = () => {
  //mapeamento da tabela para pegar a coluna MARCA
  const brand = options.marcaCat.map((m) => (m.MARCA));
  //Convertendo os valores em um único, já que são iguais
  var brandConvert = [...new Set(brand)];
  //convertendo os valores das marcas para ficarem iguais, com a primeira letra em maiúsculo
  const convertValueMarca = values.marca[0].toUpperCase() + values.marca.slice(1).toLowerCase();
  //condição para verificar se a marca selecionada está no catálogo de falha
  {if(convertValueMarca === brandConvert.toString()){
    handleShowTable();
  }else {
    setShowTable(false);
    alert('Ainda não possui diagnóstico para: ' + values.marca)
  }
}
}

  return (
    <div className='flex flex-col'>
        <h1 className='text-4xl mt-10 mb-10 text-center'>
            Diagnóstico de Falha</h1>
    <div className="flex flex-row">
        <div id='divForm' className=" flex flex-col items-center">
        <form  onSubmit={handleSubmit} className="flex flex-col items-center ml-11">
        <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='marca'
          onChange={(e) => {
            (handleChangesValues(e))
          }}
          >
          <option>Marca</option>
          {options.marca.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MARCA}
            </option> 

          )
          )}  

          </select>
          <select
          className="my-4 border-2 border-gray-300 px-10 py-3 text-md text-black text-center"
          name='modelo'
          onChange={(e) => {
            (handleChangesValues(e))
          }}
          >
          <option>Modelo</option>
          {options.modelo.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MODELO}
            </option>
          )
          )}  
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='ano'
          onChange={(e) => {
            (handleChangesValues(e))
          }}
          >
          <option>Ano</option>
          {options.ano.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.ANO}
            </option>
          )
          )}  
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='motor'
          onChange={(e) => {
            (handleChangesValues(e))
          }}
          >
          <option>Motor</option>
          {options.motor.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MOTOR}
            </option>
          )
          )}  
          </select>
          <button
        className='my-4 flex px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        id='link-cad'
        onClick={() => handleSearch()}
        type='submit'>Procurar</button>
          </form>
      
        <Link to='/' 
        className='my-2 flex items-center px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        id='link-cad'
        >Menu Inicial</Link>
        </div>
        <div id="divConsulta" className="border-2 border-black">
            <div id="divPesquisa" className="border-2 border-black">
            <input
            id='pesquisa'
            type="text" 
            className="border-none w-96 focus:outline-none mr-20"
            onChange={e => setBusca(e.target.value)}
            placeholder="Digite o sintoma, a peça ou a descrição da falha.."/>
            </div>
            {showtable && (
              <div>
              <TableContainer component={Paper}>
              <Table stickyHeader sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
              <TableHead>
              <TableRow>
                <TableCell align='center'>Descrição</TableCell>
                <TableCell align='center'>Código</TableCell>
                <TableCell align='center'>Probabilidade</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {options.causa.filter(val => {
                      if (busca === ''){
                          return val;
                      }else if(
                          val.ROOTCAUSE.toString().toLowerCase().includes(busca.toLowerCase()) ||
                          val.Symptoms.toString().toLowerCase().includes(busca.toLowerCase())
                      ){
                          return val;
                      }
                  })
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((o, i) => (
                      <TableRow key={i}>
                          <TableCell align='center'>{o.ROOTCAUSE}</TableCell>
                          <TableCell align='center'></TableCell>
                          <TableCell align='center'></TableCell>
                      </TableRow>
                  ))}

          </TableBody>
          </Table>
          </TableContainer>
          <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={options['causa'].length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </div>
            )}

        </div>


            
        </div>
    </div>
  );
}