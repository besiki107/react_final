import { useEffect, useState } from 'react'
import { getTrending } from '../services/tmdb'

export default function useTrendingMovies(timeWindow='day'){
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getTrending('movie', timeWindow)
      .then(data => { if(mounted){ setMovies(data.results || []); setError(null) } })
      .catch(e => { if(mounted) setError(e.message || 'Error') })
      .finally(() => { if(mounted) setLoading(false) })
    return () => mounted = false
  }, [timeWindow])

  return { movies, loading, error }
}
