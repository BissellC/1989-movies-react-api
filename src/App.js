import React, { Component, useEffect, useState } from 'react'
import HelloWorld from './components/HelloWorld'
import axios from 'axios'
import Movie from './components/Movie'

const App = () => {
  const [movies, setMovies] = useState([])

  const getAPIData = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=beef9ba86ca8277fb3da8d91389f491d'
    )
    console.log(resp.data)
    setMovies(resp.data.results)
  }

  useEffect(() => {
    console.log('using the effect')
    getAPIData()
  }, [])

  return (
    <>
      <h1>Best movies in 1989</h1>
      <ul>
        {movies.map(movie => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              overview={movie.overview}
            />
          )
        })}
      </ul>
    </>
  )
}

export default App
