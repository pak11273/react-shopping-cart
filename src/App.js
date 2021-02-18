import React, { useState } from "react";

import Navigation from "./components/Navigation";
import { ProductContext } from "./contexts/ProductContext";
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
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <Navigation cart={cart} />

        {/* Routes */}
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
