import React from "react";
import PlayerCard from "./playerCards";
import {PlayerContainer} from "./playerStyles";

const PlayerCardContainer = props => {
  let playerData = props.playerData;
  return (
    <PlayerContainer>
      {playerData.map(player => 
        <PlayerCard playerData={player} />
      )}
    </PlayerContainer>
  );
};

export default PlayerCardContainer;
