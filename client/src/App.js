import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" 
        render={props => (
          <MovieList
            {...props}
            // match={props.match}
            // location={props.location}
            // history={props.history}
            items={this.state.savedList}
          />
        )} />
      />
        <Route path="/movies/:id"           
        render={props => (
            <Movie {...props}              
              items={this.state.savedList}
              addToSavedList={this.addToSavedList}
            />
          )} />          
      </div>
    );
  }
}
