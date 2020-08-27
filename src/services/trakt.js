import axios from "axios";
const baseUrl = "https://api.trakt.tv";

let token = null;
const clientId =
  "99b8f99564ecf2d2dfcb1c65084bd4e12617380f7073225fe4e184595cc2f157";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
    "trakt-api-version": 2,
    "trakt-api-key": clientId,
  },
};

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
  config.headers.Authorization = token;
};

const getLastWatchedMovies = async () => {
  const response = await axios.get(
    `http://localhost:8080/api/trakt/lastwatched/movies`,
    config
  );
  return response.data;
};

const getWatchlistMovies = async () => {
  const response = await axios.get(`${baseUrl}/sync/watchlist/movies`, config);
  return response.data;
};

const getAllWatchedMovies = async () => {
  const response = await axios.get(`${baseUrl}/sync/watched/movies`, config);
  return response.data;
};

const getMovieRecommendations = async () => {
  const response = await axios.get(`${baseUrl}/recommendations/movies`, config);
  return response.data;
};

const getLastWatchedShows = async () => {
  const response = await axios.get(
    `http://localhost:8080/api/trakt/lastwatched/shows`,
    config
  );
  return response.data;
};

const getWatchlistShows = async () => {
  const response = await axios.get(`${baseUrl}/sync/watchlist/shows`, config);
  return response.data;
};

const getAllWatchedShows = async () => {
  const response = await axios.get(`${baseUrl}/sync/watched/shows`, config);
  return response.data;
};

const getShowRecommendations = async () => {
  const response = await axios.get(`${baseUrl}/recommendations/shows`, config);
  return response.data;
};

const getStats = async () => {
  const response = await axios.get(
    `http://localhost:8080/api/trakt/stats`,
    config
  );
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
