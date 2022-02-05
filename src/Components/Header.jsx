import styled from "styled-components";
import {ReactComponent as Logo} from '../assets/crown.svg'
import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase.config";


const Header = ({currentUser}) => {
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
              </OptionsContainer>
          </Wrapper>
      </Container>
  );
};

export default Header;

const Container = styled.div`
    height: 70px;
    min-width: 100%;
    width: 100%;

`;

const Wrapper = styled.div`
    padding: 10px 70px;
    display: flex;
    align-items: center;
    
`;

const LogoContainer = styled(Link)`
    flex: 1;
`

const OptionsLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`

const OptionsContainer = styled.div`
    flex: 1;

`




