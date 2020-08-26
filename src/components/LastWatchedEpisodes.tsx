import React from "react";
import Episode from "./Episode";
import { Row, Col } from "antd";

const LastWatchedEpisodes = (props: any) => {
  if (props.data) {
    console.log(props.data);
  }

  return (
    <div>
      <h2>Last Watched Episodes</h2>
      <Row>
        {props.data ? (
          props.data.map(
            (episode: {
              id: any;
              show: any;
              episode: any;
              watched_at: any;
            }) => (
              <Col span={14} flex="1 1 200px">
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
