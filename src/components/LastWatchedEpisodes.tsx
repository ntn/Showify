import React from "react";
import Episode from "./Episode";
import { Row, Col } from "antd";

const LastWatchedEpisodes = (props: any) => {
  return (
    <div>
      <h2>Last Watched Episodes</h2>
      <Row>
        {props.data ? (
          props.data.map(
            (episode: {
              id: number;
              show: object;
              episode: object;
              watched_at: string;
            }) => (
              <Col key={episode.id} span={14} flex="1 1 200px">
                <Episode
                  key={episode.id}
                  show={episode.show}
                  episode={episode.episode}
                  watched={episode.watched_at}
                />
              </Col>
            )
          )
        ) : (
          <h1>No Recent Show Watch History</h1>
        )}
      </Row>
    </div>
  );
};

export default LastWatchedEpisodes;
