import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export default fetcher;