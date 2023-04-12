import React from 'react'
const { useState, useEffect } = require('react');

export default function Row({ movie, handleUpdate, onDelete }) {
    const [showingMore, setShowingMore] = useState(true);
    const showMore = () => {
        showingMore ? setShowingMore(false) : setShowingMore(true);
    };
    return (
        showingMore ?
            <tr key={movie._id} >
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.genres.join(', ')}</td>
                <td><button onClick={() => handleUpdate(movie)}>UPDATE</button></td>
                <td><button onClick={() => onDelete(movie._id)}>DELETE</button></td>
                <td><button onClick={showMore}>MORE</button></td>
            </tr > :
            <table key={movie._id}>
                <thead> 
                </thead>
                <tbody>
                    <tr>
                        <td>{movie.title}</td>
                        <td>{movie.year}</td>
                        <td>{movie.genres.join(', ')}</td>
                        <td><button onClick={() => handleUpdate(movie)}>UPDATE</button></td>
                        <td><button onClick={() => onDelete(movie._id)}>DELETE</button></td>
                        <td><button onClick={showMore}>LESS</button></td>
                        <td>Release date: {movie.release_date}</td>
                        <td>Runtime: {movie.runtime}</td>
                        <td>Actors: {movie.actors?.join(', ')}</td>
                        <td>Directors: {movie.directors?.join(', ')}</td>
                        <td>Writers: {movie.writers?.join(', ')}</td>
                        <td>CreatedAt: {movie.createdAt}</td>
                        <td>UpdatedAt: {movie.updatedAt}</td>
                        <td>Storyline: {movie.storyline}</td>
                    </tr>
                </tbody>
            </table>
    )
}
