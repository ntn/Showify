import React, { useEffect, useState } from "react";
import { Card } from "antd";
import tmdbService from "../services/tmdb";
import defaultImg from "../images/NoImgFound.jpg";

const Episode = (props: any) => {
  const [poster, setPoster] = useState(defaultImg);
  const { Meta } = Card;

  useEffect(() => {
    getPosterImage();
  }, []);

  const getPosterImage = async () => {
    const res = await tmdbService.getPosterForShow(props.show.ids.tmdb);
    setPoster(res);
  };

  return (
    <div>
      <br />
      <Card
        hoverable
        style={{ width: 220 }}
        cover={<img alt={props.show.title} src={poster} />}
      >
        <Meta
          title={props.episode.title}
          description={`Season ${props.episode.season}: Episode ${props.episode.number}`}
        />
      </Card>
    </div>
  );
};

export default Episode;
