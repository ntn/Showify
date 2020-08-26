import React from "react";
import Show from "./Show";
import { Row, Col } from "antd";

type idObject = {
  trakt: number;
  slug: string;
  tvdb: number;
  imdb: string;
  tmdb: number;
  tvrage: number;
};

type ShowObject = {
  title: string;
  year: number;
  ids: idObject;
};

const RecommendedShows = (props: any) => {
  return (
    <div>
      <h2>Recommended Shows</h2>
      <Row>
        {props.data ? (
          props.data.map((show: ShowObject) => (
            <Col key={show.ids.trakt} span={14} flex="1 1 200px">
              <Show
                key={show.ids.trakt}
                title={show.title}
                yearOfRelease={show.year}
                imgIds={show.ids}
              />
            </Col>
          ))
        ) : (
          <h1>No Shows Recommended</h1>
        )}
      </Row>
    </div>
  );
};

export default RecommendedShows;
