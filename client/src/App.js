import React from 'react'; 
import HeaderBar from './components/HeaderBar';
import { useFetch } from './hooks/useFetch';
import Body from './components/Body';

class App extends React.Component{
  

  render(){
    return(
    <div> 
      <HeaderBar/>
      <Body/>
    </div>)
  }
}


export default App;
