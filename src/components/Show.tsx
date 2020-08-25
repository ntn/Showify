import React, { useEffect, useState } from "react";
import tmdbService from "../services/tmdb";

const Show = (props: any) => {
  const [image, setImage] = useState("../images/NoImgFound.jpg");

  useEffect(() => {
    // getImg();
  }, []);

  const getImg = async () => {
    const res = await tmdbService.getPosterForShow(props.show.ids.tmdb);
    setImage(res);
  };
  console.log(image);

  return (
    <div>
      <h1>{props.episode.title}</h1>
      <img src={image} width="200" height="300"></img>
    </div>
  );
};

export default Show;
