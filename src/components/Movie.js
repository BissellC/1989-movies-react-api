import React from 'react'

const Movie = props => {
  return (
    <li className="movie">
      <span className="movie-title"> {props.title} </span>
      <img
        src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + props.image}
      />

      <span className="overview">{props.overview}</span>
    </li>
  )
}

export default Movie
