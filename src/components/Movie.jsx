import React from 'react'

const Movie = ({movie}) => {

  const imgStyles={
    height: '340px',
    objectFit: 'cover',
  }

  const isFavorite = true;

  return (
    <div className='card'>
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className='card-img-top'
        style={imgStyles}
      />
      <div>
        <h4>{movie.title}</h4>
        <button className={`btn ${isFavorite ? 'btn-sucess' : 'btn-outline-primary'}`}>
          Favorito
        </button>
      </div>
      <h1>Movie</h1>
    </div>
  )
}

export default Movie
