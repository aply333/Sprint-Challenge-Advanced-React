import React from 'react';
import { useFetch } from '../hooks/useFetch';
import PlayerCardContainer from './playerCards/playerCardContainer';

const Body = props => {

    const playerData = useFetch("http://localhost:5000/api/players","Data Pooled in Body");

    return(
        <div>
            <PlayerCardContainer playerData={playerData}/>
        </div>
    )
}

export default Body;