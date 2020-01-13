import React from 'react';
import Gif from '../GifContainer/Gif';
import '../GifContainer/gif.scss'
function Favorites (props)  {
    const favorites = props.favorites;
    
  return(
    <>
      <h1 className="favorite-header-text">
          Your Favorite Gifs
        </h1>
      <div className="gif-container favorite-container">
        {favorites.map((img,i)=> <Gif index={`${i}`} alt_text={`gif-fav-image-${i}`} image={img} favorites={favorites} />)}
        {favorites.length === 0 && <>Oh nos, no favorites! Go back to search</>}
      </div>
    </>
  )
}
export default Favorites;