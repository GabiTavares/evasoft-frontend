import { Link } from "react-router-dom";
import MenuSair from "../components/menuSair";


const Menu = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <MenuSair />
            <h1 className='text-4xl mt-10 mb-10'>Selecione uma opção</h1>

            <Link to='/cadastro' className='my-4 block w-7xl px-20 py-4 text-sm text-black border-2 border-gray-400 hover:bg-slate-100'>Cadastro de Equipamento</Link>
            <Link to='/consulta' className='my-4 block w-7xl px-24 py-4 text-sm text-black border-2 border-gray-400 hover:bg-slate-100'>Consulta de Catálogo</Link>
            <Link to='/falhas' className='my-4 block w-7xl px-24 py-4 text-sm text-black border-2 border-gray-400 hover:bg-slate-100'>Diagnóstico de Falhas</Link>

    
        </div>
    )
}

export default Menu;