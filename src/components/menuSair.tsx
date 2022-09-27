import { Link } from "react-router-dom";


export default function MenuSair() {
  return (

    <div className="flex justify-end ml-auto text-center">
            <select>
                <option> 
                    Configurações da Conta 
                </option>
                <option value="/" className="text-red-700 font-bold text-center"> 
                    <Link className="link-selecionar" to='/' >Sair</Link>
                </option>
            </select>
            
        </div>

        
  );
}