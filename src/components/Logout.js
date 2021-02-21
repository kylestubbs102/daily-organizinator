import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '249253331405-95j048peh8kle948lgfdi09n4rn2sjpq.apps.googleusercontent.com' //insert client id here


function Logout(props) {

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    props.setLoggedIn(false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;