import React, { useEffect, useState } from "react";
import Show from "./Show";

const LastWatchedShows = (props: any) => {
  if (props.data) {
    console.log(props.data);
  }

  return (
    <div>
      {props.data ? (
        props.data.map(
          (show: { id: any; show: any; episode: any; watched_at: any }) => (
            <Show
              key={show.id}
              show={show.show}
              episode={show.episode}
              watched={show.watched_at}
            />
          )
        )
      ) : (
        <h1>No Recent Show Watch History</h1>
      )}
    </div>
  );
};

export default LastWatchedShows;
