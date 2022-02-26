import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../../Firebase/Firebase.config";
import { connect } from "react-redux";
import { Container, LogoContainer, OptionsContainer, OptionsLink, Wrapper } from './header.style';
import { CartDropdown, CartIcon } from '..';
import { createStructuredSelector } from 'reselect';
import { selectToggleHidden } from '../../Redux/cart/cart-selectors';
import { selectCurrentUser } from '../../Redux/user/user-selectors';

const Header = ({currentUser,hidden}) => {
  return (
      <Container>
          <Wrapper>
              <LogoContainer to='/'>
                    <Logo/>
              </LogoContainer>
              <OptionsContainer>
                <OptionsLink to='/shop'> SHOP</OptionsLink>
                {currentUser ? (
                    <OptionsLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                    </OptionsLink>
                ) : (
                    <OptionsLink to='/signin'>SIGN IN</OptionsLink>
                )}   
                <CartIcon/>

              </OptionsContainer>
                    { hidden ?   <CartDropdown/> : ""  }
          </Wrapper>
      </Container>
  );
};
// mapStateToProps allow us to access the state(root-reducer) and returns
// an object where the name of the property is the actual property we want to pass in and the value will be the value

    const mapStateToProps = createStructuredSelector ({
        // the state here is the root reducer, the top level reducer - user value - currentUser in the user reducer
        currentUser: selectCurrentUser,
        hidden: selectToggleHidden
    })

export default connect (mapStateToProps) (Header);






