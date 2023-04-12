import React from 'react';
import './MoviesTable.css';
import { useNavigate } from 'react-router-dom';
import Row from '../Row/Row';

export default function MoviesTable({ moviesArray, onDelete }) {
  const navigate = useNavigate();
  const handleUpdate = (movie) => {
    navigate('/update', { state: movie });
  };

  return (
    <div className='MoviesTable'>
      <table className='Table'>
        <thead>
        </thead>
        <tbody>
          {moviesArray.map((movie) => (
            <Row  onDelete={onDelete} movie={movie} handleUpdate={handleUpdate} />
          ))}
        </tbody>
      </table>
    </div>
  );
}