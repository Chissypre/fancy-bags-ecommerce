import './Authentication.styles.scss'

import SignUpForm from '../Sign-up-form/Sign-up-form';
import SignInForm from '../Sign-in-form/Sign-in-form';



const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;