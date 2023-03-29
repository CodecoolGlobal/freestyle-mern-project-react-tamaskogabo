import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieForm({ onSubmit, movie }) {
  return (
    <>
      <form className='movie-form' onSubmit={(event) => onSubmit(event)}>
        <div className='input-fields'>
          <label htmlFor='title'>Title:</label>
          <input defaultValue={movie?.title} name='title' id='title'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='genres'>Genres:</label>
          <input defaultValue={movie?.genres.join(', ')} name='genres' id='genres'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='year'>Year:</label>
          <input defaultValue={movie?.year} name='year' id='year'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='runtime'>Runtime:</label>
          <input defaultValue={movie?.runtime} name='runtime' id='runtime'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='release_date'>Release date:</label>
          <input defaultValue={movie?.release_date} name='release_date' id='release_date'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='writers'>Writers:</label>
          <input defaultValue={movie?.writers.join(', ')} name='writers' id='writers'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='actors'>Actors:</label>
          <input defaultValue={movie?.actors.join(', ')} name='actors' id='actors'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='storyline'>Storyline:</label>
          <input defaultValue={movie?.storyline} name='storyline' id='storyline'></input>
        </div>
        <div className='input-fields'>
          <label htmlFor='directors'>Directors:</label>
          <input defaultValue={movie?.directors.join(', ')} name='directors' id='directors'></input>
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
