import React from 'react';
import './MoviesTable.css';
import { Link, useNavigate } from 'react-router-dom';
import UpdateMovie from '../../pages/UpdateMovie';

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
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Genres</th>
            <th></th>
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
              <td><button onClick={() => handleMore(movie)}>MORE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}