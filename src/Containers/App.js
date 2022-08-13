import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
import "../index.css";
import "./App.css";

//state can change our app, and it is usually lives in the
//parent component, that can pass the state to the different components.
//so we could access "robots" by: "this.state.robots"
//now our state - that is "robots" is passed down as props,
//so CardList accepts "robots" as props, eventhough in the App.js
//they are state.

function App() {
  // when App renders, it first creats the states:
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  // then fetches the list of robots:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      //and then the users will update the robots state using the new users
      .then(users => {setRobots( users )});
    //the empty [] is a dependency array- a shortcut for "componentDidMount"
    //when there is something inside, App will re-render everytime that
    //something changes
  }, []);

  //building methods of our own, require us to use the syntax of an arrow function
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <h1 className="appHeadline">ROBOFRIENDS</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
