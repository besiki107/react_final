export function pickTrailer(videos){
  if(!videos || !videos.results) return null
  const res = videos.results.find(v => v.type === 'Trailer' && v.site === 'YouTube') || videos.results[0]
  return res ? res.key : null
}
