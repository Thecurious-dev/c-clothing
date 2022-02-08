import React from 'react';
import styled from 'styled-components';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import {signInWithGoogle} from '../Firebase/Firebase.config'


 const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  
`;

 const SignInTitle = styled.h2`
  margin: 10px 0;
`;

 const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;




// const SignIn = () => {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   const [values, setValues] = useState({
//     email: '',
//     password: '',
    
//   });

  
  
//   const handleChange = event => {
//     const { value, name } = event.target;

//     setValues({ [name]: value });
//   }

//   return (
//     <SignInContainer>
//     <SignInTitle>I already have an account</SignInTitle>
//     <span>Sign in with your email and password</span>

//     <form >
//       <FormInput
//         name='email'
//         type='email'
//         onChange={handleChange}
//         value={values.email}
//         label='email'
//         required
//       />
//       <FormInput
//         name='password'
//         type='password'
//         values={values.password}
//         onChange={handleChange}
//         label='password'
//         required
//       />
//       <ButtonsBarContainer>
//         <CustomButton type='submit'> Sign in </CustomButton>
//         <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
//           Sign in with Google
//         </CustomButton>
//       </ButtonsBarContainer>
//     </form>
//   </SignInContainer>
//   );
// };

// export default SignIn;


class SignIn extends React.Component {
  
  state = {
    email: '',
    password: ''
  };
  

  handleSubmit = async event => {
    event.preventDefault();

    // const { email, password } = this.state;

    
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            onChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;