import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import "../index.css";
import "./App.css";

//state can change our app, and it is usually lives in the 
//parent component, that can pass the state to the different components. 
//so we could access "robots" by: "this.state.robots"
//now our state - that is "robots" is passed down as props, 
//so CardList accepts "robots" as props, eventhough in the App.js
//they are state. 

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots:[],
      searchfield: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots:users}));
  }


  //building methods of our own, require us to use the syntax of an arrow function
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (!this.state.robots.length){
      return <h1>Loading...</h1>
    } else {
        return (
    <div className="App">
      <h1 className='appHeadline'>ROBOFRIENDS</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <ErrorBoundry>
         <CardList robots={filteredRobots}/>
        </ErrorBoundry>
      </Scroll>
    </div>
  );
    }
  }
}

export default App;
