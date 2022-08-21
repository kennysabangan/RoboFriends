import React, { useState, useEffect } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "./Scroll";
import ErrorBoundary from '../ErrorBoundary';
import './index.css';
import './App.css';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setRobots(users))
  }, [])

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return (
    !robots.length ? <h1>Loading...</h1> :
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox setSearchfield={setSearchfield} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
  )
}

export default App;