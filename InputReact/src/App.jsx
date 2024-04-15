import React, { Component, } from "react";

class App extends Component{

state = ({
  persons:[
    {name: "BOJ", age: 37},
    {name: "SOJ", age: 90},
    {name: "DOC", age: 40},
    {name: "LOS", age: 31},
  ],

  showpersons: false
})



togglePersonHandler() {
  let doesShow = this.state.showpersons
  this.setState({
    showpersons: !doesShow
  })

}
render () {



  return(
    <>
    <h1>Hello world</h1>
    <button onClick={()=>this.togglePersonHandler()}>SHOW</button>
    {
      this.stateshowperson ?

      <div>
        {this.state.persons.map(
          (person, index)=>
          )}
      <Person name = {this.state.persons[0].name} age = {this.state.person[0].age}></Person>
      <Person name = {this.state.persons[1].name} age = {this.state.person[1].age}></Person>
      <Person name = {this.state.persons[2].name} age = {this.state.person[2].age}></Person>
      <Person name = {this.state.persons[3].name} age = {this.state.person[3].age}></Person>

      </div>: <h1>Showpersons is false</h1>
    }
   
    </>
  )
}



}










export default App;
