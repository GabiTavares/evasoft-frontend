import React from 'react'
import api from './api';
import Selecao from './components/Select';
import './styles/main.css'

class App extends React.Component {
    
  async componentDidMount() {
    const response = await api.get('http://localhost:5000/marcas')
    console.log(response.data)
    this.setState({users: response.data})
  }
  state = {
    users: [],
  }
  render(){
    

    const {users} = this.state;
    //console.log(users)
    if (users.length > 0) {
      return(
      <div>
        <Selecao
        options = {users}
        
        />
      </div>
      )
    }
  }
}

// interface Users {
//   id: string;
//   name: string;
// }



// function App() {
  

//     const [users, setUsers] = useState<Users[]>([])


//     useEffect(() => {
//       fetch('http://localhost:5001/users', {
//         method: 'GET',
//         headers: {
//           'Content-Type' : 'application/json',
//         },
//         mode: 'cors'
//       })
//       .then(response => response.json())
//       .then(data => {
//         setUsers(data);
//       })
//       .catch((err) => console.log(err))
//     }, [])

//     const makeAPICall = async () => {
//       try {
//         const response = await fetch('http://localhost:5001', {
//           mode:'cors',
//           method: 'GET',
//           headers: {
//                   'Content-Type' : 'application/json',
//                 },
                
//         });
//         const data = await response.json();
//         console.log({data})
//         setMarcas([data])
//       }
//       catch (e) {
//         console.log(e)
//       }
//     }
    
//     useEffect(() => {
//       makeAPICall()
//     }, [])

    
//     return (
//       <div>
//         {users.map(user => {
//           return(
//             <p key={user.id}>{user.name}</p>
//           )
//         })}
//       </div>
//     )
  
// }

export default App;

