import React from "react";
import Show from "./Show";
import { Row, Col } from "antd";

type ShowObject = {
  title: string;
  year: number;
  ids: object;
};

const WatchlistShows = (props: any) => {
  return (
    <div>
      <h2>Show Watchlist</h2>
      <Row>
        {props.data ? (
          props.data.map(
            (show: { id: number; show: ShowObject; listed_at: string }) => (
              <Col key={show.id} span={14} flex="1 1 200px">
                <Show
                  key={show.id}
                  title={show.show.title}
                  yearOfRelease={show.show.year}
                  imgIds={show.show.ids}
                />
              </Col>
            )
          )
        ) : (
          <h1>Empty Show Watchlist</h1>
        )}
      </Row>
    </div>
  );
};

export default WatchlistShows;
