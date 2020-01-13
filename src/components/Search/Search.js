import React from 'react';
import axios from 'axios';
import GifContainer from '../GifContainer/GifContainer';
import './Search.scss';

class Search extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      gifs: []
    };

    this.submit = React.createRef();
  }

handleChange = (event,num) => {

    this.setState({
       text: event.target.value
    })
  
    if(this.state.text !== "" && this.state.text){
    let query = this.state.text.replace(' ', '+')
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=QZIYGVsyZAj1tDyIEh8tKfq7GjcefBpO&limit=${num}`).then( response => {
      // handle success
      this.setState({
         gifs: response.data.data
      })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
      console.log("get request complete")
    });
  }
 }


  render(){


  return (
    <div className="search-section">
        <h1> 
          Search for a Gif, and click on your fav in the results:
        </h1>
        <p className="desktop-text">
          *hit up arrow to view favorites
        </p>
        <label htmlFor="searchInput" className="hidden"> Search:</label>
        <input id="searchInput" type="text" aria-label="search-input" name="searchInput" onChange={e => this.handleChange(e,5)}/>
        <button id="search-button" aria-label="submit-search" onClick={e => this.handleChange(e,50)}>GO</button>
       <GifContainer gifs={this.state.gifs} favorites={this.props.favorites}/>
    </div>
  );
   }
}

export default Search;
