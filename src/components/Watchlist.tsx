import React, { useEffect, useState } from "react";
import traktService from "../services/trakt";
import WatchlistShows from "./WatchlistShows";
import WatchlistMovies from "./WatchlistMovies";
const Home = () => {
  const [watchlistShows, setWatchlistShows] = useState(null);
  const [watchlistMovies, setWatchlistMovies] = useState(null);

  useEffect(() => {
    traktService.getWatchlistShows().then((res) => {
      setWatchlistShows(res);
    });
    traktService.getWatchlistMovies().then((res) => {
      setWatchlistMovies(res);
    });
  }, []);

  return (
    <div>
      <br />
      <WatchlistShows data={watchlistShows} />
      <br />
      <WatchlistMovies data={watchlistMovies} />
    </div>
  );
};

export default Home;
