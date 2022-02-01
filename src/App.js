import './App.css';
import {Routes,Route} from "react-router-dom";

import  OrdersTable from "./components/OrdersTable";
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Reception from './components/Reception';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      < Route path='/' element = {<Reception/>} />
      < Route path='/menu' element = {<Menu/>} />
      < Route path='/orders' element = {<OrdersTable/>} />
      </Routes>
    </div>
  );
}

export default App;
