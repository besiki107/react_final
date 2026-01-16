import React from 'react'
import { Link } from 'react-router-dom'
import { getImage } from '../../utils/image'

export default function MovieCard({ movie, onToggleWatchlist, inWatchlist }){
  const rating = typeof movie.vote_average === 'number'
    ? movie.vote_average.toFixed(1)
    : 'N/A'

  return (
    <article className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={getImage(movie.poster_path)} alt={movie.title} />
      </Link>
      <div className="movie-body">
        <h4 className="movie-title">{movie.title}</h4>
        <div className="movie-actions">
          <span className="movie-rating">Rating: {rating}</span>
          <button onClick={() => onToggleWatchlist(movie)} className={`watch-btn ${inWatchlist ? 'in' : ''}`}>
            {inWatchlist ? 'Remove' : 'Watch'}
          </button>
        </div>
      </div>
    </article>
  )
}
