import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/" exact component={Product} />
          <Route path="/product/:id" exact component={ProductDetails} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Cart />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
