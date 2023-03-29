import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieForm from '../Components/MovieForm/MovieForm';

export default function CreateMovie() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const movieToSend = Object.fromEntries(formData);
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

  return (
    <>
      <MovieForm onSubmit={handleSubmit} />
    </>
  );
}
