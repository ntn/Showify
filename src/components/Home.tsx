import React, { useEffect, useState } from "react";
import traktService from "../services/trakt";
import LastWatchedShows from "./LastWatchedShows";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    traktService.getLastWatchedShows().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div>
      Homepage
      <LastWatchedShows data={data} />
    </div>
  );
};

export default Home;
