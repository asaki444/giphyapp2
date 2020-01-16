import React from 'react';
import Search from './components/Search/Search';
import FavoriteButton from './components/FavoriteButton/FavoriteButton';
import Favorites from  './components/Favorites/Favorites';
import './App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       favorites: [],
       showSearch: true
    };

  }
 

  toggleText = () => {
    this.setState(state => ({ showSearch: !state.showSearch }));
  };
  
  handleKeyPress = (event) => {
  
    switch (event.keyCode) {
      case 38:
          this.toggleText();
        break;
      case 40:
          document.getElementById("searchInput").focus();
          break;
      case 13:
        if(this.state.showSearch ){
         document.getElementById("search-button").click();
         event.target.click();
        }
        break;
      default:
  
    }


  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }


  render() {
    const {showSearch, favorites} = this.state;
    const {searchInput, searchButton} = React.createRef()
    
      return (
        <div className="App">
          <div className="App-header">
            <FavoriteButton toggleText={this.toggleText} showSearch={showSearch}/>
          {showSearch ? <Search ref={searchInput} favorites={favorites}/> : <Favorites ref={searchButton} showSearch = {showSearch} favorites={favorites}/> }
          
          </div>   
        </div>
      );
    }
}


export default App;
