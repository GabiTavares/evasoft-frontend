import { Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination, 
  TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/style_cat.css';


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

const [showhide, setShowHide] = useState('');

const handleShowHide = (e) => {
  const getMarca = e.target.value;
  setShowHide(getMarca);
  setMarca({value: e.target.value});
}
//Filtragem de informações,
//Trazendo as informações da Query
const [dados, setDados] = useState([]);
useEffect(() => {
  fetch('http://localhost:5000/api/decision2')
  .then((res) => res.json())
  .then((data) => setDados(data))
},[])

console.log(dados)


  return (
    <div className='flex flex-col'>
        <h1 className='text-4xl mt-10 mb-10 text-center'>
            Diagnóstico de Falha</h1>
    <div className="flex flex-row">
        <div id='divForm' className=" flex flex-col items-center">
        {
                  showhide === 'TOYOTA' && (
                    <input 
                  id='serie'
                  name='serie'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nº de série'
                  onChange={handleChangesValues}
                  //carregar json antes da validação/cadastro
                />
                  )
                }
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
            (handleShowHide(e)),
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
            {showhide && (
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
                {options.id.filter(id => {
                    if(values.marca === ''){
                        return id
                    }else if(
                        id.MARCA.toUpperCase().includes(values.marca) &&
                        id.MODELO.toUpperCase().includes(values.modelo) &&
                        id.ANO.toString().toUpperCase().includes(values.ano) &&
                        id.MOTOR.toUpperCase().includes(values.motor))
                        {
                        return id
                    }
                }
                )
                .map((opi,i) => {
                        return <>
                            {dados
                            .filter(val => {
                              if(val.id === ''){
                                return val;
                              }else if(
                                val.id.toString() === opi.ID.toString()
                              ){
                                return val
                              }
                            })
                            .filter(v => {
                              if (busca === ''){
                                  return v;
                              }else if(
                                  v.ROOTCAUSE.toString().toLowerCase().includes(busca.toLowerCase()) ||
                                  v.Symptoms.toString().toLowerCase().includes(busca.toLowerCase()) ||
                                  v.SpareParts.toString().toLowerCase().includes(busca.toLowerCase())
                              ){
                                  return v;
                              }
                          })
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((root, i) => (
                              <TableRow key={i}>
                                <TableCell align='center'>{root.ROOTCAUSE}</TableCell>
                                <TableCell align='center'></TableCell>
                                <TableCell align='center'></TableCell>
                              </TableRow>
                            )
                            )}
                              </>
                    
                })}
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