import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import MovieDetailsPage from '../pages/MovieDetailsPage'
import WatchlistPage from '../pages/WatchlistPage'
import NotFoundPage from '../pages/NotFoundPage'

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="movie/:id" element={<MovieDetailsPage />} />
        <Route path="watchlist" element={<WatchlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
