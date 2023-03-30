import React from 'react';
import './MoviesTable.css';
import { useNavigate } from 'react-router-dom';

export default function MoviesTable({ moviesArray, onDelete }) {
  const navigate = useNavigate();
  const handleUpdate = (movie) => {
    navigate('/update', {state: movie});
  };
  const handleMore = (movie) => {
    navigate('/more', {state: movie});
  };

  return (
    <div className='MoviesTable'>
      <table className='Table'>
        <thead>
        </thead>
        <tbody>
          {moviesArray.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.genres.join(', ')}</td>
              <td><button onClick={() => handleUpdate(movie)}>UPDATE</button></td>
              <td><button onClick={() => onDelete(movie._id)}>DELETE</button></td>
              <td><button onClick={() => handleMore(movie)}>MORE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}