import React from 'react';
import GitHubLogin from 'react-github-login';
import {onFailure,onSuccess} from '../../Api/Api'
function Login() {
  return(
    <div>
    <h1>Hey Node There</h1>
    <GitHubLogin clientId="f5bbaa46fbf6ee2eb75e"
    redirectUri="http://localhost:3000"
    onSuccess={onSuccess}
    onFailure={onFailure} />
    </div>
  )
}

export default Login;
