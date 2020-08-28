import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import FoodDetail from './components/FoodDetail/FoodDetail';
import Cart from './components/Cart/Cart';

function App() {
  const [foods, setfoods] = useState([])
  const [cart, setcart] = useState([])

  useEffect(() => {
    fetch('https://hot-onion.herokuapp.com/api/v1/foods')
    .then(res => res.json())
    .then(data => {
      setfoods(data.data.foods);
     })
  }, [])

  const addToCart = item =>{
    const newCart = [...cart, item];
    setcart(newCart);
  }

  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
  return (
    <div className="container-fluid px-2 App">
      <div className="text-center" id="header"><h1 className="py-4 logo">Awesome Restaurant Food</h1></div>
      <div className="row">
      <div className="col-md-3">
             <h2 className="text-center">Cart{cart.length}</h2>
           <ul className="list-group">
              {cart.map(item => <Cart item={item}/>)}
           </ul>
           <button type="button" className="btn btn-primary btn-block">
             Checkout <span className="badge badge-light">$ {totalPrice}</span>
           </button>
        </div>
        <div className="col-md-9 row border-right">
           {foods.map((food) => <FoodDetail food={food} addToCart={addToCart} key={food._id}/> )}
        </div>
      </div>
    </div>
  );
}

export default App;
