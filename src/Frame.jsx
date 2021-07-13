import React from "react";

const Frame = (props) => {
  return (
    <div>
      <div class="symbol">{props.symbol}</div>
      <div class="score">{props.score}</div>
      <div class="totalScore">{props.totalScore}</div>
    </div>
  );
};
export default Frame;
