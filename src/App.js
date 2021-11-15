import Header from './components/Layout/Header';
import './App.css'
import { useState } from 'react';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';


function App() {
  const [cartisShown,setCartisShown]=useState(false);
  const showCartHandler = () => {
    setCartisShown(true);
  }
  const hideCartHandler = () => {
    setCartisShown(false);
  }

  return (
    <CartProvider>
      {cartisShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
