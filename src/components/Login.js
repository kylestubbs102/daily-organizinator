import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshTokens';

const clientId = '249253331405-95j048peh8kle948lgfdi09n4rn2sjpq.apps.googleusercontent.com' //insert client id here


function Login(props) {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
    props.setLoggedIn(true);
    props.setName(res.profileObj.name)
    props.setGoogleObj(res.profileObj)
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login 😢. Please try again`
    );
  };

  
  return (

    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;