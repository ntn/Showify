import React from "react";
import Movie from "./Movie";
import { Row, Col } from "antd";

type MovieObject = {
  title: string;
  year: number;
  ids: object;
};

const AllWatchedMovies = (props: any) => {
  return (
    <div>
      <h2>All Movies Watched</h2>
      <Row>
        {props.data ? (
          props.data.map(
            (movie: { id: number; movie: MovieObject; listed_at: string }) => (
              <Col key={movie.id} span={14} flex="1 1 200px">
                <Movie
                  key={movie.id}
                  title={movie.movie.title}
                  yearOfRelease={movie.movie.year}
                  imgIds={movie.movie.ids}
                />
              </Col>
            )
          )
        ) : (
          <h1>No Movies Watched</h1>
        )}
      </Row>
    </div>
  );
};

export default AllWatchedMovies;
