import React, { Component } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from '../components/ErrorBoundary';
import Header from './Header';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => this.props.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
  });

  render () {
    const { onSearchChange, isPending } = this.props;

    return (
      isPending ? <h1>Loading...</h1> :
        <div className='tc'>
          <Header />
          <SearchBox onSearchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          </Scroll>
        </div>
    )
  }
}

export default MainPage;