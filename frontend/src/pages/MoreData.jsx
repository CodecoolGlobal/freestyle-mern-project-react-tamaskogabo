import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoreData.css';

export default function MoreData() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div id='moredata-div'>
      <h1>Title: {state.title}</h1>
      <h3>Genres: {state.genres?.join(', ')}</h3>
      <h3>Year: {state.year}</h3>
      <h3>Release date: {state.release_date}</h3>
      <h3>Runtime: {state.runtime}</h3>
      <h4>Actors: {state.actors?.join(', ')}</h4>
      <h4>Directors: {state.directors?.join(', ')}</h4>
      <h4>Writers: {state.writers?.join(', ')}</h4>
      <h5>Storyline: {state.storyline}</h5>
      <h6>CreatedAt: {state.createdAt}</h6>
      <h6>UpdatedAt: {state.updatedAt}</h6>
    </div>
  );
}
