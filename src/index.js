import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const itemListData = doc(firestore, "C:/Users/mati0/OneDrive/Desktop/CoderHouse/cursoReactJS/proyect-ecomm-herrera/src/firebase/json-to-firestore/data.json")

// const itemList = [
//   {
//     id: 1,
//     quantity: 1,
//     stock: 5,
//     title: "Parallets",
//     category: "Hardware",
//     price: 9.5,
//     imgSRC: paralletIMG,
//     desc: "Some parallets. Unknown brand. Parallel bars' small brother. Very nice indeed. I would deffinitely buy these.",
//   },
//   {
//     id: 2,
//     quantity: 1,
//     stock: 3,
//     title: "Parallel Bars",
//     category: "Hardware",
//     price: 14.0,
//     imgSRC: parallelBarIMG,
//     desc: "Some parallel bars. Use them to do dips and stuff. Unknown brand. Very nice indeed. I would deffinitely buy these.",
//   },
//   {
//     id: 3,
//     quantity: 1,
//     stock: 3,
//     title: "Wall Mounted Pull-Up Bar",
//     category: "Hardware",
//     price: 19.0,
//     imgSRC: pullUpBarIMG,
//     desc: "A pull up bar, that you can mount on the wall, self explanatory. Unknown brand. Very nice and simple indeed. I would deffinitely buy it.",
//   },
//   {
//     id: 4,
//     quantity: 1,
//     stock: 5,
//     title: "Acrobat Rings",
//     category: "Hardware",
//     price: 7.5,
//     imgSRC: ringsIMG,
//     desc: "Some acrobat rings. Unknown brand. Hang 'em on the roof or a tree branch. Very nice and versatile. I would deffinitely buy these.",
//   },
//   {
//     id: 5,
//     quantity: 1,
//     stock: 10,
//     title: "Resistance Bands",
//     category: "Misc",
//     price: 8.0,
//     imgSRC: resistBandsIMG,
//     desc: "Some resistance bands. Unknown brand. Use them to help you out on your exercise by adding more resistance or by providing support. Very nice indeed. I would deffinitely buy these.",
//   },
//   {
//     id: 6,
//     quantity: 1,
//     stock: 15,
//     title: "Wrist Wraps",
//     category: "Misc",
//     price: 3.0,
//     imgSRC: wristWrapIMG,
//     desc: "Some wrist wrapping. Unknown brand. This will save your wrist from folding the way you dont want them to fold. Very nice and safe indeed. I would deffinitely buy these.",
//   },
//   {
//     id: 7,
//     quantity: 1,
//     stock: 3,
//     title: "Weighted Vest",
//     category: "Weights",
//     price: 35.0,
//     imgSRC: weightVestIMG,
//     desc: "A weighted vest. Made by StreetGains, aparently . Good for that extra weight you need to lose or gain weight... Yeah. I would deffinitely buy these.",
//   },
//   {
//     id: 8,
//     quantity: 1,
//     stock: 4,
//     title: "Adjustable Weight Dumbbell",
//     category: "Weights",
//     price: 3.0,
//     imgSRC: dumbbellIMG,
//     desc: "Some dumbbells w/ adjustable weight. Unknown brand. Self explanatory isnt it? But they are a beauty of confort. I would deffinitely buy these.",
//   },
// ];

// function writeData() {
//   itemList.forEach(function(obj){
//     db.collection("itemList").add({
//       id = obj.id,
//       quantity = obj.quantity,
//       stock = obj.stock,
//       title = obj.title,
//       category = obj.category,
//       price = obj.price,
//       imgSRC = obj.imgSRC,
//       desc = obj.desc
//     }).then(function(docRef){
//       console.log("doc written: "+docRef.id)
//     }).catch(function(error){
//       console.log("Error: "+error)
//     })
//   });
//   setDoc(itemListData, docData);
// };

// writeData();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
