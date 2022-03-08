import { initializeApp } from "firebase/app";
import {
  getFirestore,
  serverTimestamp,
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
} from "firebase/firestore";

// FIREBASE CONFIG DATA - RAW
export const firebaseConfig = {
  apiKey: "AIzaSyB_yobR_UkQAANmNUH6ZSIXLEwtXUOstOA",
  authDomain: "matimovementshop.firebaseapp.com",
  projectId: "matimovementshop",
  storageBucket: "matimovementshop.appspot.com",
  messagingSenderId: "790851153301",
  appId: "1:790851153301:web:b31e9b568868326b069a9c",
};

// FIRESTORE DATA INITIALIZATON
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// collection ref
const productsColRef = collection(db, "itemList");

// getting all products
export const getAllDocs = async () => {
  const snapshot = await getDocs(productsColRef);
  const docs = snapshot.docs;
  const docsArray = [];
  docs.forEach((doc) => docsArray.push({ ...doc.data(), id: doc.id }));
  return docsArray;
};

// getting product by id
export const getOneDoc = async (id) => {
  const docRef = doc(db, "itemList", id);
  const docSnap = await getDoc(docRef);
  const docData = docSnap.data();
  return docData;
};

export const submitForm = async ( {
  formData,
  setformData,
  setOrderId,
  cartList,
  totalPrice,
  setFinishedOrder,
  e
} ) => {
  // SUBMITS FORM TO FIREBASE - SETS ID TO BE USED
  e.preventDefault();
  let placedOrder = {};
  placedOrder.date = new serverTimestamp();
  placedOrder.buyer = formData;
  placedOrder.items = cartList.map((cartItem) => {
    const itemName = cartItem.title;
    const itemId = cartItem.id;
    const itemPrice = cartItem.price;
    return { itemName, itemId, itemPrice };
  });
  placedOrder.totalPrice = totalPrice;
  const db = getFirestore();
  const addOrder = async (placedOrder) => {
    const newOrder = await addDoc(collection(db, "orders"), {
      ...placedOrder,
    });
    setOrderId(newOrder.id);
    return newOrder.id;
  };
  addOrder(placedOrder)
    .then(setformData({ name: "", phone: "", mail: "" }))
    .finally(setFinishedOrder(true));
};


exports.getAlldocs = getAllDocs; // USAR EXPORT DE COMMONJS????