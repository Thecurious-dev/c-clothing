import Header from "./Components/Header";
import { GlobalStyles } from "./GlobalStyles";
import { Routes,Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Shop from './Pages/Shop';
import SignInAndSignUp from "./Pages/SignInAndSignUp";
import { auth } from "./Firebase/Firebase.config";
import { useEffect, useState } from "react";


function App() {

  const [currentUser, setcurrentUser] = useState()
    // onAuthStateChanged is used to listen whenever the user changes, it is use to get persistence of user sessions
    // as long as the app is mounted;
    // unsubscribeFromAuth is use to close subscription when the app unmount

  useEffect(() => {
   const unSubscribeFromAuth= auth.onAuthStateChanged(user =>{
      setcurrentUser(user);
      console.log(user);

      //I am getting currentUser is assigned a value but never read in terminal,
      // i no longer get this when i pass currentUser as props to Header
    });
    return () => {
      unSubscribeFromAuth();

    };
    
  }, []);

  
  
  


  return (
    <div >
      <GlobalStyles/>
      <Header currentUser={currentUser}/>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />
      
      <Route path="/signin" element={<SignInAndSignUp />} />


      </Routes>
    </div>
  );
}

export default App;
