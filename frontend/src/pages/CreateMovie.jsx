import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import MovieForm from '../Components/MovieForm/MovieForm';
import Login from '../Components/Login/Login';

function splitMultipleInputs(keys, movieToSend) {
  for (const key of keys) {
    if (movieToSend[key].includes(', ')) {
      movieToSend[key] = movieToSend[key].split(', ');
    }
  }
}

export default function CreateMovie() {
  const navigate = useNavigate();

  const [loggedIn] = useOutletContext();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const movieToSend = Object.fromEntries(formData);
    splitMultipleInputs(
      ['actors', 'directors', 'writers', 'genres'],
      movieToSend,
    );

    try {
      await fetch('http://localhost:8080/api/movies/', {
        method: 'POST',
        body: JSON.stringify(movieToSend),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  if (!loggedIn) {
    return <Login />;
  }

  return (
    <>
      <MovieForm onSubmit={handleSubmit} />
    </>
  );
}
