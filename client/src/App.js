
import './App.css';
import{Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NavComponent from './components/NavComponent';
import AddEdit from './pages/AddEdit';


function App() {
  return (
    <div className="App">

    <NavComponent/>
     <Routes>
     <Route path="/" element= {<Home/>}/>;
    
     <Route path="/contacts" element = {<Contacts />}/>;
     <Route path ="/add" element ={<AddEdit/>}/>

     </Routes>
    </div>
  );
}

export default App;
