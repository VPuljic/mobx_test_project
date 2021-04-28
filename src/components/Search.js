import React from "react";

const SentenceButtonPresentational = (props) => (
  <div>
    <button onClick={props.getMoviesService}>Get A New movie</button>
  </div>
);

export default SentenceButtonPresentational;
