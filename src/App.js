import React from 'react';
import './App.css';

import HeaderDiv from "./Components/HeaderDiv.jsx";
import ListDiv from './Components/ListDiv';
import FooterDiv from './Components/FooterDiv';


class App extends React.Component {
  state = { 
    inputText : "",
    listValue: "",
    listArr: [],
   } 
   
  getInputValue = (event) => {
    let userValue = event.target.value; 
    this.setState({data: this.state.inputText = userValue})
}


  testFunction = () => {
    let daTa = this.state.data
    this.setState({listData: this.state.listValue = daTa})
    this.state.listArr.push(this.state.data)
    console.log(this.state.listArr);
 }
 clearAll = () => {
   this.setState({clearer: this.state.listArr.length = 0})
 }
//  
 listDel = () => {

  console.log("bin clicked!");

 }
 overRite = () => {
   
   console.log("pen clicked!");
 }

 listMain = () => {

   console.log("mainList clicked!");
 }

  render() { 
    return (
      <div className='mainDiv'>
        <HeaderDiv userText={this.getInputValue}  myFunc={this.testFunction}/>
        {this.state.listArr.map(e => <ListDiv listMain={this.listMain} overRite={this.overRite} list_del={this.listDel} value={e}/>)}
        <FooterDiv  clearAll={this.clearAll} arrLength={this.state.listArr.length}/>
      </div>
    );
  }

}
 
export default App;


