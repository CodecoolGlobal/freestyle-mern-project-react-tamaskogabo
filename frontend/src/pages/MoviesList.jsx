import React, {useEffect, useState} from 'react';
import MoviesTable from '../Components/MoviesTable/MoviesTable';

export default function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return <div>Loading...</div>
  }

  return <MoviesTable moviesArray={movies}/>;
}
