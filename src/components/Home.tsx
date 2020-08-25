import React, { useEffect, useState } from "react";
import traktService from "../services/trakt";
const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    traktService.getAll().then((res) => {
      setData(res);
      console.log(data);
    });
  }, []);

  return <div>Homepage</div>;
};

export default Home;
