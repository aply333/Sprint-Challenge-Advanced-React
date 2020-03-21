import React from 'react'; 
import HeaderBar from './components/HeaderBar';
import Body from './components/Body';
import SelectedContainer from './components/selectedPlayers/selectedContainer';

 

class App extends React.Component{
  initialChecked = []

  constructor(){
    super();
    this.state={
      list: this.initialChecked
    }
  }

  addHandler = addPlayer =>  {
    this.setState({
      list:[
        ...this.state.list,{
          player: addPlayer,
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
      <SelectedContainer selected={this.state}/>
      <Body addHandler={this.addHandler}/>
    </div>)
  }
}


export default App;
