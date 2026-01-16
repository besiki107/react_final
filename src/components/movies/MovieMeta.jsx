import React from 'react'

export default function MovieMeta({ movie }){
  if(!movie) return null
  return (
    <div className="movie-meta">
      <h2>{movie.title}</h2>
      <p>{movie.tagline}</p>
      <p>{movie.overview}</p>
      <p>Release: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} min</p>
    </div>
  )
}
