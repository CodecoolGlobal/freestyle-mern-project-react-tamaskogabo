import React from 'react';
import './MoviesTable.css';
import { useNavigate } from 'react-router-dom';

export default function MoviesTable({ moviesArray, onDelete }) {
  const navigate = useNavigate();
  const handleUpdate = (movie) => {
    navigate('/update', {state: movie});
  };
  return (
    <div className='MoviesTable'>
      <table className='Table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Genres</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {moviesArray.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.genres.join(', ')}</td>
              <td><button onClick={() => handleUpdate(movie)}>UPDATE</button></td>
              <td><button onClick={() => onDelete(movie._id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}