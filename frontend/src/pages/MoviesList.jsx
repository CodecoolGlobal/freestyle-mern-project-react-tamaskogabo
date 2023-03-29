import React, { useEffect, useState } from 'react';
import MoviesTable from '../Components/MoviesTable/MoviesTable';

export default function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [titleQuery, setTitleQuery] = useState('');
  const [genresQuery, setGenresQuery] = useState('');

  let displayedMovies = [];

  if (movies) {
    displayedMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(titleQuery.toLowerCase()),
    );
    displayedMovies = displayedMovies.filter((movie) =>
      movie.genres.join(', ').toLowerCase().includes(genresQuery.toLowerCase()),
    );
  }

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await fetch(`http://localhost:8080/api/movies/${id}`, {
        method: 'DELETE',
      });
      const filteredMovies = movies.filter((movie) => movie._id !== id);
      setMovies(filteredMovies);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        if (!ignore) {
          const promise = await fetch('http://127.0.0.1:8080/api/movies');
          const movies = await promise.json();
          setMovies(movies);
          setLoading(false);
        }
      } catch (error) {
        console.error('Something went wrong...');
        console.log(error);
      }
    }
    let ignore = false;
    fetchMovies();
    return () => {
      ignore = true;
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='search-inputs'>
        <input
          type='search'
          placeholder='Search by title'
          value={titleQuery}
          onChange={(e) => setTitleQuery(e.target.value)}
        ></input>
        <input
          type='search'
          placeholder='Search by genre'
          value={genresQuery}
          onChange={(e) => setGenresQuery(e.target.value)}
        ></input>
      </div>
      <MoviesTable onDelete={handleDelete} moviesArray={displayedMovies} />
    </>
  );
}
