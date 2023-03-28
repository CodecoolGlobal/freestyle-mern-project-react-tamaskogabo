import React from 'react';
import './MoviesTable.css';

export default function MoviesTable({ moviesArray }) {
  return (
    <div className='MoviesTable'>
      <table className='Table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
          {moviesArray.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.genres.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
