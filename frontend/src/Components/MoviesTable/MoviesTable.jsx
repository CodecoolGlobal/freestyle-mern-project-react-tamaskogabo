import React from 'react';
import './MoviesTable.css';
import { useNavigate } from 'react-router-dom';
import Row from '../Row/Row';
import { Link } from 'react-router-dom';

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
            <Link style={{ textDecoration: 'none' }} to={`/comment/${movie._id}` }>
              <Row key={movie._id} onDelete={onDelete} movie={movie} handleUpdate={handleUpdate} />
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}