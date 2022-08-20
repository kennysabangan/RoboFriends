import React, { Component } from 'react';
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./containers/Scroll";
import './index.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
      loading: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ robots: users }))
    this.setState({ loading: true })
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })

  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      !this.state.loading ? <h1>Loading...</h1> :
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} searchfield={this.state.searchfield} />
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
    )
  }

}

export default App;