import React from 'react';
import { directors } from '../data';


  
  const ourDirectors = directors

  const genTitle = () => {
  return ourDirectors.map(director => <div>{director.name} {director.movies.map(movie => <li>{movie}</li>)}</div>)
  }
  
  const Directors = (movies) => {
    return (
      <div>
        <h1>Directors Page</h1>
        {genTitle()}
      </div>
    );
  };

export default Directors

// make a new <div> for each director. The <div> should contain the director's 
// name and a <ul> with a list of their movies.
