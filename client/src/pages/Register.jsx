import { GoogleLogin } from '@react-oauth/google';
import decode from 'jwt-decode'

function Register() {
  return (
    <>
      <div>
        <h1>Google Signup</h1>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(decode(credentialResponse.credential));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          text='signup_with'
          useOneTap
        />
        ;
      </div>
    </>
  );
}

export default Register;