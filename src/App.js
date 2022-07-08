import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SearchForm from "./Components/SearchForm";
import PhotoList from "./Components/PhotoList";
import apiKey from "./Components/config";
import Nav from "./Components/Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      robots: [],
      tacos: [],
      naruto: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.performSearch();
    this.performSearch('robots');
    this.performSearch('tacos');
    this.performSearch('naruto');
  }

  performSearch = (query = this.state.query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        if (query === "robots") {
          this.setState({ robots: response.data.photos.photo, loading: false});
        } else if (query === "tacos") {
          this.setState({ tacos: response.data.photos.photo, loading: false});
        } else if (query === "naruto") {
          this.setState({ naruto: response.data.photos.photo, loading: false});
        } else
          this.setState({
            photos: response.data.photos.photo,
            loading: false,
            query: query
          });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <SearchForm onSearch={this.performSearch} />
        <Nav navSelection={this.handleClick} />

        <Switch>
        <Route exact path='/' render={ () => <PhotoList data={this.state.photos} title={this.state.query} query={this.state.query} />} />
        <Route path='/search/:search' render={() => <PhotoList data={this.state.photos} query={this.state.query} />} />
        <Route exact path='/robots' render={() => <PhotoList data={this.state.robots}/>}/>
        <Route exact path='/tacos' render={() => <PhotoList data={this.state.tacos}/>}/>
        <Route exact path='/naruto' render={() => <PhotoList data={this.state.naruto}/>}/>
        <Route path={"/search/:query"} render= {() => <PhotoList data={this.state.photos} />} />

        {/* // <Route path="/robots" render={ () => <PhotoList data={this.state.photos} query={this.state.query}/> } /> */}
        {/* <div className="photo-container">
          {this.state.loading ? (
            <p> Loading...</p>
          ) : (
            <PhotoList data={this.state.photos} />
          )}
        </div> */}
        </Switch>

      </BrowserRouter>
    );
  }
} 

export default App;