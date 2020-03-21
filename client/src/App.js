import React from 'react'; 
import HeaderBar from './components/HeaderBar';
import Body from './components/Body';
import SelectedContainer from './components/selectedPlayers/selectedContainer';
import Chart from './components/playerChart/chart';

 

class App extends React.Component{
  initialChecked = []

  constructor(){
    super();
    this.state={
      list: this.initialChecked
    }
  }

  addHandler = (addPlayer, addCount) =>  {
    this.setState({
      list:[
        ...this.state.list,{
          name: addPlayer,
          count: addCount,
          dateAdded: Date.now(),
          id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        }
      ]
    })
  }

  consoleTest = e => {
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
    <div> 
      <HeaderBar/>
      <button onClick={this.consoleTest}>Console Log</button>
      <Chart chartData={this.state}/>
      <SelectedContainer selected={this.state}/>
      <Body addHandler={this.addHandler}/>
    </div>)
  }
}


export default App;
