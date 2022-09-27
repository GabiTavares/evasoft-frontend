import { Link } from "react-router-dom";
import MenuSair from "../components/menuSair";

export default function ConsultCat() {
  return (
    <div>
        <MenuSair />
        <h1 className='text-4xl mt-10 mb-10 flex justify-center items-center'>
            Consulta de Catálogo</h1>
    <div className="flex flex-row">
        <div className=" mx-16 flex flex-col items-center">
        <select id='sel_opt' name="Marcas" className="my-4 border-2 border-gray-300 px-24 py-3 text-md text-black">
        <option value="">Marca</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
            
        </select>
        <select name="Models" className="my-4 border-2 border-gray-300 px-24 py-3 text-md text-black">
        <option value="">Modelo</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select>
        <select name="Year" className="my-4 border-2 border-gray-300 px-24 py-3 text-md text-black">
        <option value="">Ano</option>
            <option value="">2000</option>
            <option value="">2002</option>
            <option value="">2006</option>
            <option value="">2010</option>
        </select>
        <select name="Motor" className="my-4 border-2 border-gray-300 px-24 py-3 text-md text-black">
        <option value="">Motor</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select>
        <Link to='' 
        className='my-4 flex px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        >Procurar</Link>
        <Link to='/menu' 
        className='my-2 flex items-center px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        >Menu Inicial</Link>
        </div>
        <div className="border-2 border-black w-2/3 h-auto">
            <div className="border-2 border-slate-900 mx-10 mt-4 px-16 py-3 rounded-full">
            <input type="text" 
            className="border-none w-96 focus:outline-none mr-20"
            placeholder="Digite o nome do componente, sistema ou código"/>
            <button 
            className="px-5 py-2 text-md bg-black text-white ml-28 rounded-3xl"> 
            Consultar</button>
            </div>

            
        </div>


            
        </div>
    </div>
  );
}