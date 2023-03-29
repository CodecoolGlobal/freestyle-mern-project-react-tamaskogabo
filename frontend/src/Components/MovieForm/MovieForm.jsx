import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieForm({ onSubmit }) {
  return (
    <>
      <form className='movie-form' onSubmit={onSubmit}>
        <div className='input-fields'>
          <label htmlFor='title'>Title:</label>
          <input name='title' id='title'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='genres'>Genres:</label>
          <input name='genres' id='genres'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='year'>Year:</label>
          <input name='year' id='year'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='runtime'>Runtime:</label>
          <input name='runtime' id='runtime'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='release_date'>Release date:</label>
          <input name='release_date' id='release_date'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='writers'>Writers:</label>
          <input name='writers' id='writers'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='actors'>Actors:</label>
          <input name='actors' id='actors'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='storyline'>Storyline:</label>
          <input name='storyline' id='storyline'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='directors'>Directors:</label>
          <input name='directors' id='directors'></input>
        </div>
        <div className='buttons'>
          <button type='submit'>Save</button>
          <Link to='/'>
            <button type='button'>Cancel</button>
          </Link>
        </div>
      </form>
    </>
  );
}
