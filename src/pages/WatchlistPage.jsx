import React from 'react'
import useWatchlist from '../hooks/useWatchlist'
import MovieGrid from '../components/movies/MovieGrid'
import EmptyState from '../components/common/EmptyState'
import { useTranslation } from 'react-i18next'

export default function WatchlistPage(){
  const { list, remove, has } = useWatchlist()
  const { t } = useTranslation()

  if(list.length === 0) return <EmptyState title={t('watchlist.empty')} />

  return (
    <section>
      <h1>Watchlist</h1>
      <MovieGrid movies={list} onToggleWatchlist={(m)=>remove(m.id)} has={has} />
    </section>
  )
}
