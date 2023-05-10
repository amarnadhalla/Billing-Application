import './App.css';
import User from './user/userapp';
import Mybill from './Mybill/billapp';

function App() {
  if(localStorage.getItem("key") == null ){
    return(<User/>)
  }else{
    return(
      <div><Mybill/></div>
    )
  }
}

export default App;
