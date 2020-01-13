import React from 'react';
import Gif from './Gif.js';
import './gif.scss';

class GifContainer extends React.Component  {
  

    
  
  render (){
  const  {gifs, favorites} = this.props;
   
     return(
          <div className="gif-container">
           {gifs.map( (dev,i) => 
           
           <Gif index={i} alt_text={`gif-image-${dev.id}`}image={dev.images.downsized_medium.url} gifs={gifs} favorites={favorites}/>
           )}
          </div>
      )
  }
}
export default GifContainer;