import { useState } from "react";

function RegisterPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:4000/register', {
      method : 'POST',
      body : JSON.stringify({username, password}), 
      headers : { 'Content-Type' : 'application/json' }
    });
    
    if(response.status === 200){
      alert('Registration successful');
    } else {
      alert('Registration failed');
    }

  }

  return (
    <>
      <form method="post" id="register" onSubmit={register}>
        <h2>Register</h2>

        <div id="datas">
          <input 
            type="text" placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
          <input type="password" placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <input type="submit" value="Register"/>
        </div>
        <div id="sideImage">
        </div>
      </form>
    </>
  )
}

export default RegisterPage;