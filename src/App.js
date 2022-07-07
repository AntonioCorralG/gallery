import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import apiKey from './Components/config';


 class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  } 

  componentDidMount() {
    this.performSearch();
   }
 

   performSearch = (query= 'robots') => {
    //  apiKey =
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() { 
    return (
      <div>
        <div className="container">
          <div className="search-form">
            {/* <h1 className="search-form">Pic Search</h1> */}
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="photo-container">
          {
            (this.state.loading)
            ?<p> Loading...</p>
            :<PhotoList data={this.state.photos} />
          }
          <PhotoList data={this.state.photos}/>
        </div>

      </div>
    );
  }
}


export default App;
