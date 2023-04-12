import React from 'react';
import { useState, useLocation } from 'react';
import './MoreData.css';

export default function MoreData({ movie }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      {showMore &&
        <div id='moredata-div'>
          <h1>Title: {movie.title}</h1>
          <h3>Genres: {movie.genres?.join(', ')}</h3>
          <h3>Year: {movie.year}</h3>
          <h3>Release date: {movie.release_date}</h3>
          <h3>Runtime: {movie.runtime}</h3>
          <h4>Actors: {movie.actors?.join(', ')}</h4>
          <h4>Directors: {movie.directors?.join(', ')}</h4>
          <h4>Writers: {movie.writers?.join(', ')}</h4>
          <h5>Storyline: {movie.storyline}</h5>
          <h6>CreatedAt: {movie.createdAt}</h6>
          <h6>UpdatedAt: {movie.updatedAt}</h6>
        </div>}
      <button
        onClick={() =>
          showMore ?
            setShowMore(false) :
            setShowMore(true)}
      >{showMore ? 'Show Less' : 'Show More'}</button>
    </>
  );
}
