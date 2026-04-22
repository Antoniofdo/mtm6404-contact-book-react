import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnBI7B2wfwFTzR9fum6bfACI-c6cbxQSk",
  authDomain: "contactbook-26730.firebaseapp.com",
  projectId: "contactbook-26730",
  storageBucket: "contactbook-26730.firebasestorage.app",
  messagingSenderId: "309244217980",
  appId: "1:309244217980:web:bf54868d1dbef5c35e17f9",
  measurementId: "G-V4E3BFFRKC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function populateContacts() {
  const contactsRef = collection(db, "contacts");
  const snapshot = await getDocs(contactsRef);
  
  if (snapshot.empty) {
    console.log("Populating contacts...");
    await Promise.all([
      addDoc(contactsRef, { firstName: "John", lastName: "Doe", email: "john@example.com" }),
      addDoc(contactsRef, { firstName: "Jane", lastName: "Smith", email: "jane@example.com" }),
      addDoc(contactsRef, { firstName: "Bob", lastName: "Johnson", email: "bob@example.com" }),
      addDoc(contactsRef, { firstName: "Alice", lastName: "Brown", email: "alice@example.com" }),
      addDoc(contactsRef, { firstName: "Charlie", lastName: "Davis", email: "charlie@example.com" })
    ]);
    console.log("✅ Added 5 sample contacts!");
  } else {
    console.log("Contacts already exist!");
  }
}

populateContacts().catch(console.error);

