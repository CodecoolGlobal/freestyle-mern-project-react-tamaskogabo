import React from 'react';
import './Login.css';

export default function Register({ onLogin }) {
  async function registerUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userToSend = Object.fromEntries(formData);
    try {
      const request = await fetch('http://127.0.0.1:8080/register', {
        method: 'POST',
        headers: { 'content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(userToSend),
      });
      if (request.status === 400) {
        window.alert('Username already taken.');
      } else {
        onLogin(true);
      }
    } catch (error) {
      console.error(error);
      window.alert('Something went wrong, please try again');
    }
  }

  async function loginUser(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userToSend = Object.fromEntries(formData);
    try {
      const request = await fetch('http://127.0.0.1:8080/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(userToSend),
      });
      const response = await request.json();
      console.log(response);
      if (response.approved === 'false') {
        window.alert('Wrong username or password');
      } else {
        onLogin(true);
      }
    } catch (error) {
      console.error(error);
      window.alert('Wrong username or password');
    }
  }

  return (
    <>
      <div id='register-element'>
        <div id='register-form'>
          <form onSubmit={registerUser}>
            <h2>Register</h2>
            <input type='text' name='username' autoComplete='true'></input>
            <input type='password' name='password' autoComplete='true'></input>
            <button type='submit'>Submit</button>
          </form>
          <div>
            <form onSubmit={loginUser}>
              <h2>Login</h2>
              <input type='text' name='username' autoComplete='true'></input>
              <input
                type='password'
                name='password'
                autoComplete='true'
              ></input>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
