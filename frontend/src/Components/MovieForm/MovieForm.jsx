import React from 'react';
import { Link } from 'react-router-dom';
import './MovieForm.css';
import Fade from 'react-reveal/Fade';

export default function MovieForm({ onSubmit, movie }) {
  return (
    <>
      <div className='form-element'>
        <Fade bottom>
          <form className='movie-form' onSubmit={(event) => onSubmit(event)}>
            <div id='fields'>
              <div className='input-fields'>
                <label htmlFor='title'>Title: </label>
                <input
                  className='form-inputs'
                  defaultValue={movie?.title}
                  name='title'
                  id='title'
                ></input>
              </div>
              <div className='input-fields'>
                <label htmlFor='genres'>Genres: </label>
                <input
                  size='50'
                  className='form-inputs'
                  defaultValue={movie?.genres.join(', ')}
                  name='genres'
                  id='genres'
                ></input>
              </div>
              <div className='input-fields'>
                <label htmlFor='year'>Year: </label>
                <input
                  size='6'
                  type='number'
                  className='form-inputs'
                  defaultValue={movie?.year}
                  name='year'
                  id='year'
                ></input>
              </div>
              <div className='input-fields'>
                <label htmlFor='runtime'>Runtime: </label>
                <input
                  size='6'
                  type='number'
                  className='form-inputs'
                  defaultValue={movie?.runtime}
                  name='runtime'
                  id='runtime'
                ></input>
              </div>
              <div className='input-fields'>
                <label htmlFor='release_date'>Release date: </label>
                <input
                  size='10'
                  className='form-inputs'
                  defaultValue={movie?.release_date}
                  name='release_date'
                  id='release_date'
                ></input>
              </div>
              <div className='input-fields'>
                <label htmlFor='writers'>Writers: </label>
                <input
                  size='50'
                  className='form-inputs'
                  defaultValue={movie?.writers.join(', ')}
                  name='writers'
                  id='writers'
                ></input>
              </div>
              <div className='input-fields'>
                <label htmlFor='actors'>Actors: </label>
                <input
                  size='50'
                  className='form-inputs'
                  defaultValue={movie?.actors.join(', ')}
                  name='actors'
                  id='actors'
                ></input>
              </div>
              <div className='input-fields'>
                <label htmlFor='storyline'>Storyline: </label>
                <textarea
                  cols='70'
                  rows='4'
                  className='form-inputs'
                  defaultValue={movie?.storyline}
                  name='storyline'
                  id='storyline'
                ></textarea>
              </div>
              <div className='input-fields'>
                <label htmlFor='directors'>Directors: </label>
                <input
                  size='20'
                  className='form-inputs'
                  defaultValue={movie?.directors.join(', ')}
                  name='directors'
                  id='directors'
                ></input>
              </div>
              <div className='buttons'>
                <button type='submit'>Save</button>
                <Link to='/'>
                  <button type='button'>Cancel</button>
                </Link>
              </div>
            </div>
          </form>
        </Fade>
      </div>
    </>
  );
}
