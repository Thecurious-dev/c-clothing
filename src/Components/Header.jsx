import styled from "styled-components";
import {ReactComponent as Logo} from '../assets/crown.svg'
import { Link } from "react-router-dom";
const Header = () => {
  return (
      <Container>
          <Wrapper>
              <LogoContainer to='/'>
                    <Logo/>
              </LogoContainer>
              <OptionsContainer>
                <OptionsLink to='/shop'> Shop</OptionsLink>
                {/* <OptionsLink  to='/'> </OptionsLink>                  <OptionsLink> </OptionsLink> */}
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

    background-color: aqua;
`;

const Wrapper = styled.div`
    padding: 10px 70px;
    display: flex;
    align-items: center;
    
    background: beige;
`;

const LogoContainer = styled.div`
    flex: 1;
`

const OptionsLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`

const OptionsContainer = styled.div`
    flex: 1;

`




