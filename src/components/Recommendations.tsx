import React, { useEffect, useState } from "react";
import traktService from "../services/trakt";
import RecommendedShows from "./RecommendedShows";
import RecommendedMovies from "./RecommendedMovies";
const Recommendations = () => {
  const [recommendedShows, setRecommendedShows] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState(null);

  useEffect(() => {
    traktService.getShowRecommendations().then((res) => {
      setRecommendedShows(res);
    });
    traktService.getMovieRecommendations().then((res) => {
      setRecommendedMovies(res);
    });
  }, []);

  return (
    <div>
      <br />
      <RecommendedShows data={recommendedShows} />
      <br />
      <RecommendedMovies data={recommendedMovies} />
    </div>
  );
};

export default Recommendations;
