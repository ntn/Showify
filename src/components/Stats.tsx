import React, { useEffect, useState } from "react";
import { Statistic, Row, Col, Card } from "antd";
import traktService from "../services/trakt";

type MovieObject = {
  plays: number;
  watched: number;
  minutes: number;
};

type ShowObject = {
  watched: number;
};

type EpisodeObject = {
  plays: number;
  watched: number;
  minutes: number;
};

type StatsObject = {
  movies: MovieObject;
  shows: ShowObject;
  episodes: EpisodeObject;
};

const defaultStats: StatsObject = {
  movies: {
    plays: 0,
    watched: 0,
    minutes: 0,
  },
  shows: {
    watched: 0,
  },
  episodes: {
    plays: 0,
    watched: 0,
    minutes: 0,
  },
};

const Stats = (props: any) => {
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    traktService.getStats().then((res) => {
      setStats(res);
    });
  }, []);

  return (
    <div>
      <br />
      <h2>Your Watch Statistics</h2>
      <Row gutter={16}>
        <Col span={12}>
          <h3>Movies</h3>
          <Card>
            <Statistic
              title="Number of Movies Watched"
              value={stats.movies.watched}
            />
            <Statistic title="Minutes Watched" value={stats.movies.minutes} />
          </Card>
        </Col>
        <Col span={12}>
          <h3>Shows</h3>
          <Card>
            <Statistic
              title="Number of Shows Watched"
              value={stats.shows.watched}
            />
            <Statistic
              title="Number of Episodes Watched"
              value={stats.episodes.watched}
            />
            <Statistic title="Minutes Watched" value={stats.episodes.minutes} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Stats;
