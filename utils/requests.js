export const API_KEY = '587040c615cbfcc68a0ddac00aa51fe4';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/';

const requests = {
  fetchTrendingMovies: `/trending/all/week?api_key=${API_KEY}&language=ko`,
  fetchOriginMovies: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=ko`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=ko`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ko`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ko`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=ko`,

  fetchNowPlayingMovies: `/movie/now_playing?api_key=${API_KEY}&language=ko&page=1&region=KR`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=ko&page=1&region=KR`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=ko&page=1&region=KR`,
  fetchUpComingMovies: `/movie/upcoming?api_key=${API_KEY}&language=ko&page=1&region=KR`,
  fetchTodayTv: `/tv/airing_today?api_key=${API_KEY}&language=ko&page=1`,
  fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=ko&page=1`,
  fetchCurrentOnAirTv: `/tv/on_the_air?api_key=${API_KEY}&language=ko&page=1`,
  fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=ko&page=1`,
}

export default requests;