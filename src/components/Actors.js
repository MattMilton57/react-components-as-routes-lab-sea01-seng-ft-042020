import React from 'react';
import { actors } from '../data';

const ourActors = actors

const genTitle = () => {
return ourActors.map(actor => <div>{actor.name} {actor.movies.map(movie => <li>{movie}</li>)}</div>)
}

const Actors = (movies) => {
  return (
    <div>
      <h1>Actors Page</h1>
      {genTitle()}
    </div>
  );
};

export default Actors;

{/* <div> should contain the actor's name and a <ul> with a list of their movies. */}
