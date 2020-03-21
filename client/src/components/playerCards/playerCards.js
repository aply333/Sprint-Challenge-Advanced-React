import React from "react";

class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addPlayer: "",
      addCount: ""
    };
  }

  hoverHandler = () => {
    this.setState({
      addPlayer:this.props.playerData.name,
      addCount:this.props.playerData.searches});
  }

  handleAddPlayer = () => {
    this.props.addHandler(this.state.addPlayer, this.state.addCount);
    console.log(this.state)
  };

  render() {
    return (
      <div
        onMouseOver = {this.hoverHandler}
        onClick={this.handleAddPlayer}>
        <h3>{this.props.playerData.name}</h3>
        <h5>{this.props.playerData.country}</h5>
        <h5>Searched: {this.props.playerData.searches}</h5>
      </div>
    );
  }
}

// const PlayerCard = props => {
//     const clickHandle = () => {

//     }

//     return(
//         <div>
//             <h3>{props.playerData.name}</h3>
//             <h5>{props.playerData.country}</h5>
//             <h5>{props.playerData.searches}</h5>
//         </div>
//     )
// }

export default PlayerCard;
