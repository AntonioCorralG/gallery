import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SearchForm from "./Components/SearchForm";
import PhotoList from "./Components/PhotoList";
import apiKey from "./Components/config";
import Nav from "./Components/Nav";
import NotFound from "./Components/NotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      robots: [],
      tacos: [],
      naruto: [],
      loading: true,
      query: ""
    };
  }

  componentDidMount() {
    this.performSearch('robots');
    this.performSearch('tacos');
    this.performSearch('naruto');
    this.performSearch();
  }


  performSearch = (query = 'fruits') => {
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
        } else {
          this.setState({
            photos: response.data.photos.photo,
            loading: false,
            query: query
          });
        }
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <SearchForm onSearch={this.performSearch} />
          <Nav  />

          <Switch>
            <Route exact path='/' render={ () => <PhotoList data={this.state.photos} title={this.state.query} query={this.state.query} />} />
            <Route path='/search/:query' render={() => <PhotoList data={this.state.photos} query={this.state.query}/>} />
            <Route exact path='/robots' render={() => <PhotoList data={this.state.robots} title="robots" query="robots"/>}/>
            <Route exact path='/tacos' render={() => <PhotoList data={this.state.tacos} title="tacos" query="tacos" />}/>
            <Route exact path='/naruto' render={() => <PhotoList data={this.state.naruto} title="naruto" query="naruto"/>}/>
            <Route render={() =><NotFound />}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
} 

export default App;