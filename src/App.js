import React, { useState } from "react";

import Navigation from "./components/Navigation";
import Products from "./components/Products";
import { Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import data from "./data";

// Components




function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}
      <Route exact path="/">
        <Products products={products} addItem={addItem} />
      </Route>

      <Route path="/cart">
        <ShoppingCart cart={cart} />
      </Route>
    </div>
  );
}

export default App;
