import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

api.interceptors.request.use(config => {
  const key = import.meta.env.VITE_TMDB_API_KEY
  if (!key) return config
  config.params = config.params || {}
  config.params['api_key'] = key
  return config
})

export default api
