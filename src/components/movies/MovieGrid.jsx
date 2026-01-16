import React from 'react'
import MovieCard from './MovieCard'

export default function MovieGrid({ movies = [], onToggleWatchlist = ()=>{}, has = ()=>false }){
  return (
    <div className="movie-grid">
      {movies.map(m => (
        <MovieCard key={m.id} movie={m} onToggleWatchlist={onToggleWatchlist} inWatchlist={has(m.id)} />
      ))}
    </div>
  )
}
