import React from "react";
import Movie from "./Movie";
import { Row, Col } from "antd";

type idObject = {
  trakt: number;
  slug: string;
  imdb: string;
  tmdb: number;
};

type MovieObject = {
  title: string;
  year: number;
  ids: idObject;
};

const AllWatchedMovies = (props: any) => {
  return (
    <div>
      <h2>All Watched Movies</h2>
      <Row>
        {props.data ? (
          props.data.map(
            (movie: { movie: MovieObject; last_watched_at: string }) => (
              <Col key={movie.movie.ids.trakt} span={14} flex="1 1 200px">
                <Movie
                  key={movie.movie.ids.trakt}
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
