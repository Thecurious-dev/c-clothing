import React, { Component } from 'react';

import Header from "./Components/Header";
import { GlobalStyles } from "./GlobalStyles";
import { Routes,Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Shop from './Pages/Shop';
import SignInAndSignUp from "./Pages/SignInAndSignUp";
import { auth ,createUserProfileDocument} from './Firebase/Firebase.config';






// const App = () => {
//     const [currentUser, setCurrentUser] = useState();

//     useEffect(() => {
//       const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
//         if (userAuth) {
//            // if userAuth exist then we store the newly created user object in userRef to check the location of the newly created user. 
//            //and to know
//         // if our database has updated and we waited for the createUserProfileDocument that we created in firebase.utils
//           const userRef = await createUserProfileDocument(userAuth);
//             // now we check the snapshot object representing the data stored in our database
//           userRef.onSnapshot(snapShot => {
//             // then on the snapshot that we got back which contains data of the newly created user or existing user
//             // we setState
//             setCurrentUser({
//               currentUser: {
//                 // created an id for the snapshot 
//                 id: snapShot.id,
//                 // and got back the data
//                 ...snapShot.data()
//               }
//             });
            
//           });
//           console.log(currentUser);
//         }
  
//         setCurrentUser(userAuth);
//       });
    
//       return () => {
//         unsubscribeFromAuth()
//       };
//     }, [currentUser]);
    


//   return (
//     <div >
//     <GlobalStyles/>
//     <Header currentUser={currentUser}/>
//     <Routes>
//     <Route path="/" element={<Homepage />} />
//     <Route path="/shop" element={<Shop />} />
    
//     <Route path="/signin" element={<SignInAndSignUp />} />


//     </Routes>
//   </div>
//   );
// };

// export default App;


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
      if (userAuth) {
         // if userAuth exist then we store the newly created user object in userRef to check the location of the newly created user. 
         //and to know
      // if our database has updated and we waited for the createUserProfileDocument that we created in firebase.utils
        const userRef = await createUserProfileDocument(userAuth);
          // now we check the snapshot object representing the data stored in our database
        userRef.onSnapshot(snapShot => {
          // then on the snapshot that we got back which contains data of the newly created user or existing user
          // we setState
          this.setState({
            currentUser: {
              // created an id for the snapshot 
              id: snapShot.id,
              // and got back the data
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){


    
      return (
        <div >
          <GlobalStyles/>
          <Header currentUser={this.state.currentUser}/>
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          
          <Route path="/signin" element={<SignInAndSignUp />} />
    
    
          </Routes>
        </div>
      );
  }
  
  

}

export default App;
