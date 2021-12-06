function solution(genres, plays) {
  const hash = {};
  
  for (let i = 0; i < genres.length; i++) {
      if (!hash[genres[i]]) {
          hash[genres[i]] = {
              total: 0,
              playList: {}
          }
      }
      hash[genres[i]]['total'] += plays[i];
      hash[genres[i]]['playList'][i] = plays[i];
  }
  
  const genreRank = Object.values(hash).sort((a, b) => b.total - a.total);
  const bestAlbum = genreRank.reduce((acc, el) => {
      const playRank = Object.keys(el['playList']).sort((a, b) => plays[b] - plays[a]).slice(0, 2);
      acc.push(...playRank.map(Number));
      return acc;
  }, [])

  return bestAlbum;
}