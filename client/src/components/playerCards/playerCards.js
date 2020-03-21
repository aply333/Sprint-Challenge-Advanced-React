import React from "react";

const PlayerCard = props => {
    return(
        <div>
            <h3>{props.playerData.name}</h3>
            <h5>{props.playerData.country}</h5>
            <h5>{props.playerData.searches}</h5>
        </div>
    )
}

export default PlayerCard;