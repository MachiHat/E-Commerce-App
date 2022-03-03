// COMPONENTS
import { Topnav } from "./components/Topnav";
import { HomePage } from "./pages/HomePage";
import { ShopContainer } from "./pages/ShopContainer";
import { ProductDetailsContainer } from "./components/ProductDetailsContainer";
import { ShopCart } from "./components/ShopCart";
// SERVER_R
import { ServerR } from "./server-r/index";
// CONTEXT
import CartContextProvider from "./context/CartContext";
// LIBS
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";

function App() {
  
  

  return (
    <div className="App">
        <CartContextProvider>
          <Router>
            <Topnav />
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route
                exact
                path="/shop"
                element={<ShopContainer />}
              />
              <Route
                path="/shop/:category"
                element={<ShopContainer />}
              />
              <Route
                path="/shop_detail/:id"
                element={<ProductDetailsContainer />}
              />
              <Route path="/cart" element={<ShopCart />} />
              <Route path="/server" element={<ServerR />} />
            </Routes>
          </Router>
        </CartContextProvider>
    </div>
  );
}

export default App;
