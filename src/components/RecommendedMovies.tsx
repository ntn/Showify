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

const RecommendedMovies = (props: any) => {
  return (
    <div>
      <h2>Recommended Movies</h2>
      <Row>
        {props.data ? (
          props.data.map((movie: MovieObject) => (
            <Col key={movie.ids.trakt} span={14} flex="1 1 200px">
              <Movie
                key={movie.ids.trakt}
                title={movie.title}
                yearOfRelease={movie.year}
                imgIds={movie.ids}
              />
            </Col>
          ))
        ) : (
          <h1>No Movies Recommended</h1>
        )}
      </Row>
    </div>
  );
};

export default RecommendedMovies;
