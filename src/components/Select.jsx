//import axios from 'axios';
//se caso o {option.name} = TOYOTA deverá aparecer um input para inserir o número de série
//se caso o option selecionado for Adicionar categoria aparecer um input para registrar uma nova categoria
//se a marca for HYSTER é para puxar do catálogo (baseHYSTER) independente dos outros dados

function Selecao({name, options, value}){
    // const handleFormSubmit = (event) => {
    //   event.preventDefault();
    //   console.log(value)
    // }
  
    // const [campos, setCampos] = useState({
    //   usuario: 0
    // })
  
    // function handleSelectChange(event) {
    //   campos[event.target.name] = event.target.value;
    //   setCampos(campos);
    // }
  
    
      return (     
    <div className='max-w-7xl mx-auto flex flex-col items-center'>
            <h1 className='text-4xl mt-10 mb-10'>Cadastro de Equipamentos</h1>
  
            <div className="flex flex-col items-center">
              <form>
          <select
          className="my-4 border-2 border-gray-300 px-24 py-3 text-md text-black"
          >
          <option>Marca</option>
          {options.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MARCA}
            </option>
            // if (option.MARCA === 'TOYOTA') {
            //     return <option>INSERIR AQUI</option>
            // }
          )
          )}  
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-24 py-3 text-md text-black"
          >
          <option>Modelo</option>
          {options.map((option, i) => (
            
          <option className='text-black' key={i} value={option.id}>
              {option.MODELO}
            </option>
            // if (option.MARCA === 'TOYOTA') {
            //     return <option>INSERIR AQUI</option>
            // }
          )
          )}  
          </select>
          
          </form>
          
          </div>
          </div>
  
          
      )
  }
  
  export default Selecao;