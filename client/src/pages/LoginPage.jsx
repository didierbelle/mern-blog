import { useState } from "react";

function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method : 'POST',
      body: JSON.stringify({username, password}),
      headers: { 'Content-Type' : 'application/json' }
    })
  }

  return (
    <>
      <form method="post" id="login" onSubmit={login}>
        <h2>Login</h2>
        <div id="datas">
          <input type="text" placeholder="Username"
            value={username} 
            onChange={(event) => setUsername(event.target.value)}
          />
          <input type="password" placeholder="Password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}
            />
          <input type="submit" value="Login"/>
        </div>
        <div id="sideImage">
        </div>
      </form>
    </>
  )
}

export default LoginPage;