import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCart} from '@fortawesome/free-solid-svg-icons'
import './components/card.css'
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListConteiner greeting = "Productos"/>
      <ItemDetailConteiner/>
    </div>
  );
}

export default App;
