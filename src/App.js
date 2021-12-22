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
// import FirebaseAppProvider from "reactfire";
import firebaseConfig from "./firebase/firebase";
// IMAGES
// import paralletIMG from "./img/parallettesShopImg.jpg";
// import parallelBarIMG from "./img/parallelBarsShopImg.jfif";
// import pullUpBarIMG from "./img/pullUpBarShopImg.png";
// import ringsIMG from "./img/ringsShopImg.jfif";
// import resistBandsIMG from "./img/resistBandsShopImg.jpg";
// import wristWrapIMG from "./img/wristWrapsShopImg.jpg";
// import weightVestIMG from "./img/weightedVest.png";
// import dumbbellIMG from "./img/adjustableDumbbells.jpg";
// LIBS
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

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
      {/* <FirebaseAppProvider> */}
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
      {/* </FirebaseAppProvider> */}
    </div>
  );
}

export default App;
