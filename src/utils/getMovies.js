import axios from "axios";

const API_KEY = 'ab8de7f6cd80f554f73acd2ad893d2dd';
const BASE_URL = 'https://api.themoviedb.org/3';

const getTrendingMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
            params: {
                api_key: API_KEY,
            }
        })
        return await response.data.results
    }
    catch (err) {
        console.log(err);
    }
};

const getMovieById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
            }
        })
        return await response.data
    }
    catch (err) {
        console.log(err);
    }
};

const getMovieCast = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
            params: {
                api_key: API_KEY,
            }
        })
        return await response.data
    }
    catch (err) {
        console.log(err);
    }
};

const getMovieReviews = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?page=1`, {
            params: {
                api_key: API_KEY,
            }
        })
        return await response.data.results
    }
    catch (err) {
        console.log(err);
    }
};

const getMoviesByQuery = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?&page=1`, {
            params: {
                query: query,
                api_key: API_KEY,
            }
        })
        return await response.data.results
    }
    catch (err) {
        console.log(err);
    }
};

const api = { getTrendingMovies, getMovieById, getMovieCast, getMovieReviews, getMoviesByQuery };
export default api
