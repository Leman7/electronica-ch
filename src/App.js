import "./App.css";
import { NavBar } from "./components/NavBar/navBar";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/itemDetailContainer";
import { Cart } from "./components/Cart/cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route path='/category/:categoryId' >
            <ItemListContainer />
          </Route>
          <Route path='/item/:productId' >
            <ItemDetailContainer />
          </Route>
          <Route path='/cart' >
            <Cart />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
