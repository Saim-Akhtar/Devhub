import React from 'react';
import GitHubLogin from 'react-github-login';
const onSuccess = async(response) => {
  console.log("here we go")
  try{
    const res=await fetch(`http://localhost:8000/user/login/getToken`,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code:response.code
      })
    })
    const token=await res.json()
    console.log(token)
    const result=await fetch(`http://localhost:8000/user/login/github`,{
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(token)
    })
    const data=await result.json()
    console.log(data)
  }

  catch(err){
    console.log(err)
  }
  
};
const onFailure = async(response) =>{
  console.error(response);
}

function App() {
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

export default App;
