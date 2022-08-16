import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCart} from '@fortawesome/free-solid-svg-icons'
import './components/card.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListConteiner/>}/>
        <Route path='category/:idCategory' element = {<ItemListConteiner/>}/> 
        <Route path='detail/:id'element={<ItemDetailConteiner/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
