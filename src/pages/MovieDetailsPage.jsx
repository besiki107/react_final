import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import Loading from '../components/common/Loading'
import ErrorState from '../components/common/ErrorState'
import MovieMeta from '../components/movies/MovieMeta'
import TrailerButton from '../components/movies/TrailerButton'
import Modal from '../components/common/Modal'
import { pickTrailer } from '../utils/pickTrailer'
import useWatchlist from '../hooks/useWatchlist'

export default function MovieDetailsPage(){
  const { id } = useParams()
  const { movie, loading, error } = useMovieDetails(id)
  const [open, setOpen] = useState(false)
  const { add, remove, has } = useWatchlist()

  if(loading) return <Loading />
  if(error) return <ErrorState message={error} />
  if(!movie) return null

  const trailerKey = pickTrailer(movie.videos)

  const toggle = () => has(movie.id) ? remove(movie.id) : add({ id: movie.id, title: movie.title, poster_path: movie.poster_path })

  return (
    <section className="movie-page">
      <div className="movie-detail">
        <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster" />
        <div className="info">
          <MovieMeta movie={movie} />
          <div className="detail-actions">
            <button onClick={toggle} className="btn">{has(movie.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}</button>
            {trailerKey && <TrailerButton onClick={()=>setOpen(true)} />}
          </div>
        </div>
      </div>
      <Modal open={open} onClose={()=>setOpen(false)}>
        {trailerKey ? <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${trailerKey}`} title="trailer" frameBorder="0" allowFullScreen /> : <div>No trailer</div>}
      </Modal>
    </section>
  )
}
