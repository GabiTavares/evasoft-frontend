import { Link } from "react-router-dom";
import MenuSair from "../components/menuSair";

export function SenhaNova() {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center'>
        <MenuSair/>
        <h1 className='text-5xl mt-10'>Esqueceu a senha?</h1>
        <span className='mt-6'>Nova senha</span>

        <div className='mt-6 border-black'>
        <label className="block text-md">EMAIL</label>
        <input 
        type="email" 
        placeholder="email@email.com.br"
        className="border-2 border-gray-400 my-2 w-7xl px-5 py-1 text-gray-300" />

        
        </div>
        <Link to='/' className='my-8 block w-7xl px-20 py-3 text-md bg-black text-white hover:bg-gray-800'>
        Enviar</Link>
    </div>
  );
}