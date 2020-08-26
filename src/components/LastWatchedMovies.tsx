import React from "react";
import Movie from "./Movie";
import { Row, Col } from "antd";

type MovieObject = {
  title: string;
  year: number;
  ids: object;
};

const LastWatchedMovies = (props: any) => {
  return (
    <div>
      <h2>Last Watched Movies</h2>
      <Row>
        {props.data ? (
          props.data.map(
            (movie: { id: number; movie: MovieObject; watched_at: string }) => (
              <Col span={14} flex="1 1 200px">
                <Movie
                  key={movie.id}
                  title={movie.movie.title}
                  yearOfRelease={movie.movie.year}
                  watched={movie.watched_at}
                  imgIds={movie.movie.ids}
                />
              </Col>
            )
          )
        ) : (
          <h1>No Recent Movie Watch History</h1>
        )}
      </Row>
    </div>
  );
};

export default LastWatchedMovies;
