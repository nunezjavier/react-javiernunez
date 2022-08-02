import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCart} from '@fortawesome/free-solid-svg-icons'
import './components/card/card.css'
import ItemListConteiner from './components/card/ItemListConteiner';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListConteiner/>
    </div>
  );
}

export default App;
