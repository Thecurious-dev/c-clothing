import React from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {signInWithGoogle} from '../../Firebase/Firebase.config'
import { auth } from '../../Firebase/Firebase.config';
import { ButtonsBarContainer, SignInContainer, SignInTitle } from './sign-in.styles';





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

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };


  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer
      >
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