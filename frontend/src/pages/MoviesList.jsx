import React, { useEffect, useState } from 'react';
import MoviesTable from '../Components/MoviesTable/MoviesTable';
import Loading from '../Components/Loading/Loading';
import './MoviesList.css';
import Login from '../Components/Login/Login';
import Fade from 'react-reveal/Fade';

function findYoungestAndOldest(movies) {
  return movies.reduce(
    (acc, movie) => {
      if (movie.year < acc.oldest) {
        acc.oldest = movie.year;
      } else if (movie.year > acc.youngest) {
        acc.youngest = movie.year;
      }
      return acc;
    },
    { oldest: movies[0].year, youngest: movies[0].year },
  );
}

export default function MoviesList() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [titleQuery, setTitleQuery] = useState('');
  const [genresQuery, setGenresQuery] = useState('');
  const [yearQuery, setYearQuery] = useState({});
  const [titleOrder, setTitleOrder] = useState('asc');
  const [titleButton, setTitleButton] = useState('Title order: A ► Z');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let displayedMovies = [];

  if (movies) {
    const youngestAndOldestMovie = findYoungestAndOldest(movies);

    displayedMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(titleQuery.toLowerCase()),
    );
    displayedMovies = displayedMovies.filter((movie) =>
      movie.genres.join(', ').toLowerCase().includes(genresQuery.toLowerCase()),
    );
    if (
      yearQuery.after &&
      yearQuery.after >= youngestAndOldestMovie.oldest &&
      yearQuery.after <= youngestAndOldestMovie.youngest
    ) {
      displayedMovies = displayedMovies.filter(
        (movie) => Number(movie.year) >= yearQuery.after,
      );
    }
    if (
      yearQuery.before &&
      yearQuery.before <= youngestAndOldestMovie.youngest &&
      yearQuery.before >= youngestAndOldestMovie.oldest
    ) {
      displayedMovies = displayedMovies.filter(
        (movie) => Number(movie.year) <= yearQuery.before,
      );
    }
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
        const promise = await fetch(`http://127.0.0.1:8080/api/movies`);
        const movies = await promise.json();
        if (!ignore) {
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
    return <Loading />;
  }

  if (isLoggedIn === false) {
    return (
      <>
        <Fade top>
          <Login onLogin={setIsLoggedIn} />;
        </Fade>
      </>
    );
  }

  function setOrder() {
    titleOrder === 'asc' ? setTitleOrder('desc') : setTitleOrder('asc');
    titleButton === 'Title order: A ► Z'
      ? setTitleButton('Title order: Z ► A')
      : setTitleButton('Title order: A ► Z');
  }

  displayedMovies.sort((a, b) => {
    if (titleOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <>
      <Fade top>
        <div className='search-inputs'>
          <button onClick={() => setOrder()}>{titleButton}</button>
          <input
            className='movie-filters'
            type='search'
            placeholder='Search by title'
            value={titleQuery}
            onChange={(e) => setTitleQuery(e.target.value)}
          ></input>
          <input
            className='movie-filters'
            type='search'
            placeholder='Search by genre'
            value={genresQuery}
            onChange={(e) => setGenresQuery(e.target.value)}
          ></input>
          <input
            className='movie-filters'
            type='number'
            placeholder='From year...'
            value={yearQuery.after ? yearQuery.after : ''}
            onChange={(e) =>
              setYearQuery({ ...yearQuery, after: Number(e.target.value) })
            }
          ></input>
          <input
            className='movie-filters'
            type='number'
            placeholder='Until year...'
            value={yearQuery.before ? yearQuery.before : ''}
            onChange={(e) =>
              setYearQuery({ ...yearQuery, before: Number(e.target.value) })
            }
          ></input>
        </div>
      </Fade>
      <MoviesTable onDelete={handleDelete} moviesArray={displayedMovies} />
    </>
  );
}
