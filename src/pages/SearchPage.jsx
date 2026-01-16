import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import useSearchMovies from '../hooks/useSearchMovies'
import MovieGrid from '../components/movies/MovieGrid'
import Loading from '../components/common/Loading'
import EmptyState from '../components/common/EmptyState'
import { useTranslation } from 'react-i18next'
import useWatchlist from '../hooks/useWatchlist'

export default function SearchPage(){
  const [q, setQ] = useState('')
  const deb = useDebounce(q, 600)
  const { movies, loading } = useSearchMovies(deb)
  const { t } = useTranslation()
  const { add, remove, has } = useWatchlist()

  const toggle = (m) => has(m.id) ? remove(m.id) : add(m)

  return (
    <section>
      <header className="page-header">
        <input
          className="search-input"
          placeholder={t('search.placeholder')}
          value={q}
          onChange={e=>setQ(e.target.value)}
        />
      </header>
      {loading && <Loading />}
      {!loading && movies.length === 0 && <EmptyState title={t('search.no_results')} />}
      <MovieGrid movies={movies} onToggleWatchlist={toggle} has={has} />
    </section>
  )
}
