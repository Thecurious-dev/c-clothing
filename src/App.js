import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "./Components/header/Header";
import { GlobalStyles } from "./GlobalStyles";
import { Redirect, Route, Switch } from 'react-router-dom';
import Homepage from './Pages/homepage/Homepage';
import Shop from './Pages/shopPage/Shop';
import SignInAndSignUp from "./Pages/signInAndSignUpPage/SignInAndSignUp";
import { auth ,createUserProfileDocument} from './Firebase/Firebase.config';
import { setCurrentUser } from './Redux/user/user.action';
import { selectCurrentUser } from './Redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './Pages/checkOutPage/CheckoutPage';




class App extends Component {
  

    
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

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
          
          // the new action setCurrentUser
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })


          
          // this.setState({
          //   currentUser: {
          //     // created an id for the snapshot 
          //     id: snapShot.id,
          //     // and got back the data
          //     ...snapShot.data()
          //   }
          // });

        });
      }

      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
      const {currentUser}= this.props
      return (
        <div >
          <GlobalStyles/>
          <Header />
          <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
        </div>
      );
  }
  
  

}
const mapStateToProps = createStructuredSelector({
  // we destructed user from state
  currentUser: selectCurrentUser
})

// mapDispatchToProps is a function that gets dispatch and return an object where the prop name
// will be what dispatches the action that we trying to pass

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  // the user is the bracket is the payload
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
