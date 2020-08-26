import React, { useEffect, useState } from "react";
import traktService from "../services/trakt";
import LastWatchedEpisodes from "./LastWatchedEpisodes";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    traktService.getLastWatchedShows().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
      <br />
      <LastWatchedEpisodes data={data} />
    </div>
  );
};

export default Home;
