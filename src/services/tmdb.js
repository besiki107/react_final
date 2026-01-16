import api from './apiClient'

export async function getTrending(media_type='movie', time_window='day'){
  const res = await api.get(`/trending/${media_type}/${time_window}`)
  return res.data
}

export async function searchMovies(query, page=1){
  const res = await api.get('/search/movie', { params: { query, page } })
  return res.data
}

export async function getMovieDetails(id){
  const res = await api.get(`/movie/${id}`, { params: { append_to_response: 'videos' } })
  return res.data
}
