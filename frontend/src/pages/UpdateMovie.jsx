import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MovieForm from '../Components/MovieForm/MovieForm';

export default function UpdateMovie() {
  const { state } = useLocation();

  function splitMultipleInputs(keys, movieToSend) {
    for (const key of keys) {
      if (movieToSend[key].includes(', ')) {
        movieToSend[key] = movieToSend[key].split(', ');
      }
    }
  }

  const handlePatch = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    splitMultipleInputs(['actors', 'writers', 'directors', 'genres'], formData);
    console.log(formData);
    try {
      const promise = await fetch(`http://localhost:8080/api/movies/${state._id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      });
      console.log(promise);
      navigate('/');
    }
    catch (error) {
      console.erro(error);
    }
  };
  console.log(state);
  return <div>
    <MovieForm onSubmit={handlePatch} movie={state} />
  </div>;
}
