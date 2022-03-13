import React from 'react';
import './App.css';

import HeaderDiv from "./Components/HeaderDiv.jsx";
import ListDiv from './Components/ListDiv';
import FooterDiv from './Components/FooterDiv';


class App extends React.Component {
  state = { 
    inputText : "",
    listValue: "",

   } 
  getInputValue = (event) => {
    let userValue = event.target.value; 
    console.log(userValue);
    this.setState({data: this.state.inputText = userValue})
}

  testFunction = () => {
    let daTa = this.state.data
    this.setState({listData: this.state.listValue = daTa})
 }

  render() { 
    return (
      <div className='mainDiv'>
        <HeaderDiv userText={this.getInputValue}  myFunc={this.testFunction}/>
        {this.state.listValue.length > 0 && <ListDiv value={this.state.listValue}/>}
        <FooterDiv/>
      </div>
    );
    
  }

}
 
export default App;


