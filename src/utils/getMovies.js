import axios from "axios";

const API_KEY = 'ab8de7f6cd80f554f73acd2ad893d2dd';
const BASE_URL = 'https://api.themoviedb.org/3';


const getTrendingMovies = async () => {
    try {
        const response = await axios(`${BASE_URL}/trending/movie/day`, {
            params: {
                api_key: API_KEY,
            },
        })
        return response
    }
    catch (err) {
        console.log(err);
    }
}


const api = { getTrendingMovies } 
export default api
