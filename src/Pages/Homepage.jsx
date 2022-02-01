import styled from 'styled-components';
import Directory from '../Components/Directory';

const Homepage = () => {
  return (
    <Container>
        <Directory/>
    </Container>

  );
};

export default Homepage;


const Container= styled.div`
     display: flex;
  flex-direction: column;
  align-items: center;

`