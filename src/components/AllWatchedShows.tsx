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

const AllWatchedShows = (props: any) => {
  return (
    <div>
      <h2>All Watched Shows</h2>
      <Row>
        {props.data ? (
          props.data.map(
            (show: { show: ShowObject; last_watched_at: string }) => (
              <Col key={show.show.ids.trakt} span={14} flex="1 1 200px">
                <Show
                  key={show.show.ids.trakt}
                  title={show.show.title}
                  yearOfRelease={show.show.year}
                  imgIds={show.show.ids}
                />
              </Col>
            )
          )
        ) : (
          <h1>No Shows Watched</h1>
        )}
      </Row>
    </div>
  );
};

export default AllWatchedShows;
