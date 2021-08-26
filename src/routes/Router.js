import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../container/home/Home";
import Products from "../components/products/Products";
import Cart from "../components/cart/Cart";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/products" component={Products}/>
          <Route exact path="/shoppingCart" component={Cart}/>           
        </Switch>
    </Router>
  );
}
