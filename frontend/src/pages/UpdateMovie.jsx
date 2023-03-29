import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieForm from '../Components/MovieForm/MovieForm';

export default function UpdateMovie() {
  const { state } = useLocation();
  const handlePatch = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    console.log(formData);
  };
  console.log(state);
  return <div>
    <MovieForm onSubmit={handlePatch} movie={state} />
  </div>;
}
