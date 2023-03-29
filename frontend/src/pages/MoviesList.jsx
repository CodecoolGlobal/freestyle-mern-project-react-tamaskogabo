import React, {useEffect, useState} from 'react';
import MoviesTable from '../Components/MoviesTable/MoviesTable';

export default function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await fetch(`http://localhost:8080/api/movies/${id}`, {
        method: "DELETE"
      });
      const filteredMovies = movies.filter(movie => movie._id !== id);
      setMovies(filteredMovies);
      setLoading(false);
    }
    catch (error) {
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
    return <div>Loading...</div>
  }

  return <MoviesTable onDelete={handleDelete} moviesArray={movies}/>;
}
