
import React from 'react';
import styled from 'styled-components';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';



const SignInAndSignUp = () => {
  return (
      <SignInAndSignUpContainer>
          <SignIn/>
          <SignUp/>

      </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;



export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;