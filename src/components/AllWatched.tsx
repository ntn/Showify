import React, { useEffect, useState } from "react";
import traktService from "../services/trakt";
import AllWatchedShows from "./AllWatchedShows";
import AllWatchedMovies from "./AllWatchedMovies";
const AllWatched = () => {
  const [watchedShows, setWatchedShows] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState(null);

  useEffect(() => {
    traktService.getAllWatchedShows().then((res) => {
      setWatchedShows(res);
    });
    traktService.getAllWatchedMovies().then((res) => {
      setWatchedMovies(res);
    });
  }, []);

  return (
    <div>
      <br />
      <AllWatchedShows data={watchedShows} />
      <br />
      <AllWatchedMovies data={watchedMovies} />
    </div>
  );
};

export default AllWatched;
