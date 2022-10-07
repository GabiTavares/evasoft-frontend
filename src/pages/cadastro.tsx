import { Link } from "react-router-dom";
import MenuSair from "../components/menuSair";


export default function CadastroEquip() {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <MenuSair />
        <h1 className='text-4xl mt-10 mb-10'>Cadastro de Equipamentos</h1>


        <div className="flex flex-col items-center">
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

        <Link to='/cadastro_finalizado' 
        className='my-4 flex w-7xl px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        >Cadastrar</Link>
        <Link to='/menu' 
        className='my-2 flex px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        >Menu Inicial</Link>

        </div>
    </div>
  );
}