import React from 'react';
import { movies } from '../data';

const ourMovies = movies

const genTitle = ourMmovies => {
return ourMovies.map(movie => <div>{movie.title} {movie.time} {movie.genres.map(genre => <li>{genre}</li>)}</div>)
}

const Movies = (movies) => {
  return (
    <div>
      <h1>Movies Page</h1>
      {genTitle()}
    </div>
  );
};

export default Movies;

// genRow = (vals) =>{ 
//   return vals.map(val => <div className="cell"><Cell value={'#fff'}/></div>) 
// }

// make a new <div> for each movie. The <div> should 
// contain the movie's title, time and a <ul> with a list of its genres.
