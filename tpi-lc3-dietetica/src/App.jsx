import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer/Footer";

import firebaseApp from "./firebase/credentials";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import UserContext from "./context/userContext";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  async function getUserData(uid) {
    const docRef = doc(firestore, `users/${uid}`);
    const docu = await getDoc(docRef);
    const userData = docu.data();
    return userData;
  }

  async function setUserWithFirebaseAndData(uid) {
    const userData = await getUserData(uid);
    setUser(userData);
  }

  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      if (!user) {
        await setUserWithFirebaseAndData(firebaseUser.uid);
      }
    } else {
      setUser(null);
    }
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Header />

          <Pages />
          <Footer />
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
