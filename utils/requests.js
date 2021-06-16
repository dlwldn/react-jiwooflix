const API_KEY = '587040c615cbfcc68a0ddac00aa51fe4';
export const BASE_URL = 'https://image.tmdb.org/t/p/original/';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ko`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ko`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ko`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=ko`,
}

export default requests;