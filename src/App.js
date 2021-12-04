// COMPONENTS
import { Topnav } from './components/Topnav';
import { HomePage } from './components/HomePage';
import { ShopContainer } from './components/ShopContainer';
import { ProductDetailsContainer } from './components/ProductDetailsContainer';
import { ShopCart } from './components/ShopCart';
// CONTEXT
import CartContextProvider from "./context/CartContext";
// IMAGES
import paralletIMG from "./img/parallettesShopImg.jpg";
import parallelBarIMG from "./img/parallelBarsShopImg.jfif";
import pullUpBarIMG from "./img/pullUpBarShopImg.png";
import ringsIMG from "./img/ringsShopImg.jfif";
import resistBandsIMG from "./img/resistBandsShopImg.jpg";
import wristWrapIMG from "./img/wristWrapsShopImg.jpg";
import weightVestIMG from "./img/weightedVest.png";
import dumbbellIMG from "./img/adjustableDumbbells.jpg";
// LIBS
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

function App() {

  const itemList = [
    {
      id: 1,
      quantity: 1,
      stock: 5,
      title: "Parallets",
      category: "Hardware",
      price: 9.5,
      imgSRC: paralletIMG,
      desc: "Some parallets. Unknown brand. Parallel bars' small brother. Very nice indeed. I would deffinitely buy these.",
    },
    {
      id: 2,
      quantity: 1,
      stock: 3,
      title: "Parallel Bars",
      category: "Hardware",
      price: 14.0,
      imgSRC: parallelBarIMG,
      desc: "Some parallel bars. Use them to do dips and stuff. Unknown brand. Very nice indeed. I would deffinitely buy these.",
    },
    {
      id: 3,
      quantity: 1,
      stock: 3,
      title: "Wall Mounted Pull-Up Bar",
      category: "Hardware",
      price: 19.0,
      imgSRC: pullUpBarIMG,
      desc: "A pull up bar, that you can mount on the wall, self explanatory. Unknown brand. Very nice and simple indeed. I would deffinitely buy it.",
    },
    {
      id: 4,
      quantity: 1,
      stock: 5,
      title: "Acrobat Rings",
      category: "Hardware",
      price: 7.5,
      imgSRC: ringsIMG,
      desc: "Some acrobat rings. Unknown brand. Hang 'em on the roof or a tree branch. Very nice and versatile. I would deffinitely buy these.",
    },
    {
      id: 5,
      quantity: 1,
      stock: 10,
      title: "Resistance Bands",
      category: "Misc",
      price: 8.0,
      imgSRC: resistBandsIMG,
      desc: "Some resistance bands. Unknown brand. Use them to help you out on your exercise by adding more resistance or by providing support. Very nice indeed. I would deffinitely buy these.",
    },
    {
      id: 6,
      quantity: 1,
      stock: 15,
      title: "Wrist Wraps",
      category: "Misc",
      price: 3.0,
      imgSRC: wristWrapIMG,
      desc: "Some wrist wrapping. Unknown brand. This will save your wrist from folding the way you dont want them to fold. Very nice and safe indeed. I would deffinitely buy these.",
    },
    {
      id: 7,
      quantity: 1,
      stock: 3,
      title: "Weighted Vest",
      category: "Weights",
      price: 35.0,
      imgSRC: weightVestIMG,
      desc: "A weighted vest. Made by StreetGains, aparently . Good for that extra weight you need to lose or gain weight... Yeah. I would deffinitely buy these.",
    },
    {
      id: 8,
      quantity: 1,
      stock: 4,
      title: "Adjustable Weight Dumbbell",
      category: "Weights",
      price: 3.0,
      imgSRC: dumbbellIMG,
      desc: "Some dumbbells w/ adjustable weight. Unknown brand. Self explanatory isnt it? But they are a beauty of confort. I would deffinitely buy these.",
    },
  ];

  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Topnav />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shop" element={<ShopContainer itemList={itemList} />} />
            <Route path="/shop/:category" element={<ShopContainer itemList={itemList} />} />
            <Route path="/shop_detail/:id" element={<ProductDetailsContainer itemList={itemList} />} />
            <Route path="/cart" element={<ShopCart itemList={itemList} />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
