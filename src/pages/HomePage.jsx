import React, { useState } from 'react'
import useTrendingMovies from '../hooks/useTrendingMovies'
import { useTranslation } from 'react-i18next'
import MovieGrid from '../components/movies/MovieGrid'
import useWatchlist from '../hooks/useWatchlist'
import Loading from '../components/common/Loading'
import ErrorState from '../components/common/ErrorState'

export default function HomePage(){
  const [window, setWindow] = useState('day')
  const { movies, loading, error } = useTrendingMovies(window)
  const { add, remove, has } = useWatchlist()
  const { t } = useTranslation()

  const toggle = (movie) => has(movie.id) ? remove(movie.id) : add(movie)

  if(error) return <ErrorState message={error} />

  return (
    <section>
      <header className="page-header">
        <h1>{t('home.trending')}</h1>
        <div className="segmented">
          <button className={window==='day'? 'active':''} onClick={()=>setWindow('day')}>{t('home.today')}</button>
          <button className={window==='week'? 'active':''} onClick={()=>setWindow('week')}>{t('home.week')}</button>
        </div>
      </header>
      {loading ? <Loading /> : <MovieGrid movies={movies} onToggleWatchlist={toggle} has={has} />}
    </section>
  )
}
