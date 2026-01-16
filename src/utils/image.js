export function getImage(path, size='w300'){
  if(!path) return 'https://via.placeholder.com/300x450?text=No+Image'
  return `https://image.tmdb.org/t/p/${size}${path}`
}
