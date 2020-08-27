import axios from "axios";
const baseUrl =
  process.env.ENV === "test"
    ? "http://localhost:8080/api/trakt"
    : "http://showify.herokuapp.com/api/trakt";

let token = null;

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
};

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
  config.headers.Authorization = token;
};

const getLastWatchedMovies = async () => {
  const response = await axios.get(`${baseUrl}/lastwatched/movies`, config);
  return response.data;
};

const getWatchlistMovies = async () => {
  const response = await axios.get(`${baseUrl}/watchlist/movies`, config);
  return response.data;
};

const getAllWatchedMovies = async () => {
  const response = await axios.get(`${baseUrl}/watched/movies`, config);
  return response.data;
};

const getMovieRecommendations = async () => {
  const response = await axios.get(`${baseUrl}/recommendations/movies`, config);
  return response.data;
};

const getLastWatchedShows = async () => {
  const response = await axios.get(`${baseUrl}/lastwatched/shows`, config);
  return response.data;
};

const getWatchlistShows = async () => {
  const response = await axios.get(`${baseUrl}/watchlist/shows`, config);
  return response.data;
};

const getAllWatchedShows = async () => {
  const response = await axios.get(`${baseUrl}/watched/shows`, config);
  return response.data;
};

const getShowRecommendations = async () => {
  const response = await axios.get(`${baseUrl}/recommendations/shows`, config);
  return response.data;
};

const getStats = async () => {
  const response = await axios.get(`${baseUrl}/stats`, config);
  return response.data;
};

export default {
  getLastWatchedMovies,
  getWatchlistMovies,
  getAllWatchedMovies,
  getMovieRecommendations,
  getLastWatchedShows,
  getWatchlistShows,
  getAllWatchedShows,
  getShowRecommendations,
  getStats,
  setToken,
};
