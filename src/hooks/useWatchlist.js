import useLocalStorage from './useLocalStorage'

export default function useWatchlist(){
  const [list, setList] = useLocalStorage('watchlist', [])

  const add = (movie) => {
    setList(prev => {
      if(prev.find(m=>m.id===movie.id)) return prev
      return [movie, ...prev]
    })
  }

  const remove = (id) => setList(prev => prev.filter(m=>m.id!==id))

  const has = (id) => list.some(m=>m.id===id)

  return { list, add, remove, has }
}
