
import React from 'react';
import SignIn from '../../Components/sign-in/SignIn';
import SignUp from '../../Components/sign-up/SignUp';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';



const SignInAndSignUp = () => {
  return (
      <SignInAndSignUpContainer>
          <SignIn/>
          <SignUp/>

      </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUp;



