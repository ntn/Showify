import React, { useEffect, useState } from "react";
import { Card } from "antd";
import tmdbService from "../services/tmdb";
import defaultImg from "../images/NoImgFound.jpg";

const Movie = (props: any) => {
  const [poster, setPoster] = useState(defaultImg);
  const { Meta } = Card;

  useEffect(() => {
    getPosterImage();
  }, []);

  const getPosterImage = async () => {
    const res = await tmdbService.getPosterForMovies(props.imgIds.tmdb);
    setPoster(res);
  };

  return (
    <div>
      <br />
      <Card
        hoverable
        style={{ width: 220 }}
        cover={<img alt={props.title} src={poster} />}
      >
        <Meta
          title={props.title}
          description={`Released: ${props.yearOfRelease}`}
        />
      </Card>
    </div>
  );
};

export default Movie;
