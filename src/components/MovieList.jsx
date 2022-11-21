import React from 'react';
import initialMovies from '../JSON/initialMovies.js';
import Movie from './Movie.jsx';

const MovieList = () => {

  console.log('MovieLit');

  return (
    <div className='container'>
      <div className='row'>
        {initialMovies.map(movie => (
          <div className='col-md-4' key={movie.id}>
            <Movie 
              movie = {movie}
            />
          </div>
        ))}
        
      </div>
      
    </div>
  )
}

export default MovieList
