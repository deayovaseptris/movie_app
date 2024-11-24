import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', width: '200px', textAlign: 'center' }}>
      <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
