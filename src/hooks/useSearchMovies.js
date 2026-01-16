import { useEffect, useState } from 'react'
import { searchMovies } from '../services/tmdb'

export default function useSearchMovies(query){
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if(!query) { setMovies([]); return }
    let mounted = true
    setLoading(true)
    searchMovies(query)
      .then(d => { if(mounted){ setMovies(d.results || []); setError(null) } })
      .catch(e => { if(mounted) setError(e.message || 'Error') })
      .finally(() => { if(mounted) setLoading(false) })
    return () => mounted = false
  }, [query])

  return { movies, loading, error }
}
