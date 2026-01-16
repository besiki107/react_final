import { useEffect, useState } from 'react'
import { getMovieDetails } from '../services/tmdb'

export default function useMovieDetails(id){
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if(!id) return
    let mounted = true
    setLoading(true)
    getMovieDetails(id)
      .then(d => { if(mounted) { setMovie(d); setError(null) } })
      .catch(e => { if(mounted) setError(e.message || 'Error') })
      .finally(() => { if(mounted) setLoading(false) })
    return () => mounted = false
  }, [id])

  return { movie, loading, error }
}
