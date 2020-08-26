import React, { useEffect, useState } from "react";
import traktService from "../services/trakt";
import LastWatchedEpisodes from "./LastWatchedEpisodes";
import LastWatchedMovies from "./LastWatchedMovies";
const Home = () => {
  const [lastWatchedEpisodesData, setLastWatchedEpisodesData] = useState(null);
  const [lastWatchedMoviesData, setLastWatchedMoviesData] = useState(null);

  useEffect(() => {
    traktService.getLastWatchedShows().then((res) => {
      setLastWatchedEpisodesData(res);
    });

    traktService.getLastWatchedMovies().then((res) => {
      setLastWatchedMoviesData(res);
    });
  }, []);

  return (
    <div>
      <br />
      <LastWatchedEpisodes data={lastWatchedEpisodesData} />
      <br />
      <LastWatchedMovies data={lastWatchedMoviesData} />
    </div>
  );
};

export default Home;
