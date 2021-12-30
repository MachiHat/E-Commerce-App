// COMPONENTS
import { Topnav } from "./components/Topnav";
import { HomePage } from "./components/HomePage";
import { ShopContainer } from "./components/ShopContainer";
import { ProductDetailsContainer } from "./components/ProductDetailsContainer";
import { ShopCart } from "./components/ShopCart";
// CONTEXT
import CartContextProvider from "./context/CartContext";
// FIREBASE
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebase";
// LIBS
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {

  // FIRESTORE DATA INITIALIZATON

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // FIRESTORE DATA FETCH W/ FUNCTION

  async function getItems(db) {
  const itemCol = collection(db, 'itemList');
  const itemSnapshot = await getDocs(itemCol);
  const itemList = itemSnapshot.docs.map(doc => doc.data());
  setItemList(itemList);
}

  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    getItems(db);
  }, [db])

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
                element={<ShopContainer itemList={itemList} />}
              />
              <Route
                path="/shop/:category"
                element={<ShopContainer itemList={itemList} />}
              />
              <Route
                path="/shop_detail/:id"
                element={<ProductDetailsContainer itemList={itemList} />}
              />
              <Route path="/cart" element={<ShopCart />} />
            </Routes>
          </Router>
        </CartContextProvider>
    </div>
  );
}

export default App;
