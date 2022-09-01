import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './components/card.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetail/ItemDetailContainer';
import {CartProvider} from './components/store/CartContext'
import Cart from './components/cart/Cart'
import UserForm from './components/userForm/UserForm';

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListConteiner/>}/>
        <Route path='category/:idCategory' element = {<ItemListConteiner/>}/> 
        <Route path='detail/:id'element={<ItemDetailConteiner/>}/> 
        <Route path="/contact" element={<UserForm />} />
        <Route path='cart' element={<Cart/>}/> 
      </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
