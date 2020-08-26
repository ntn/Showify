import React, { useEffect, useState } from "react";
import { Card } from "antd";
import tmdbService from "../services/tmdb";
import defaultImg from "../images/NoImgFound.jpg";

const Show = (props: any) => {
  const [poster, setPoster] = useState(defaultImg);
  const { Meta } = Card;

  useEffect(() => {
    getPosterImage();
  }, []);

  const getPosterImage = async () => {
    const res = await tmdbService.getPosterForShow(props.imgIds.tmdb);
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

export default Show;
