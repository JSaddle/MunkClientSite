import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import Shows from "./Pages/Shows";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { useSelector } from "react-redux";


const App = () => {
  // const user = useSelector((state) => state.user.currentUser)
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/shows" element={<Shows/>}/>
      </Routes>
    </Router>
  )
};

export default App;