import React from 'react';

async function registerUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userToSend = Object.fromEntries(formData);
  const request = await fetch('http://127.0.0.1:8080/register', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(userToSend),
  });
  console.log(request);
}

async function loginUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userToSend = Object.fromEntries(formData);
  const request = await fetch('http://127.0.0.1:8080/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(userToSend),
  });
  const response = await request.json();
  console.log(response);
}

export default function Register() {
  return (
    <>
      <div>
        <form onSubmit={registerUser}>
          <h2>Register</h2>
          <input type='text' name='username'></input>
          <input type='password' name='password'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div>
        <form onSubmit={loginUser}>
          <h2>Login</h2>
          <input type='text' name='username'></input>
          <input type='password' name='password'></input>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}
