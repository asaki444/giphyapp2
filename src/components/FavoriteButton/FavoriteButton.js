import React from 'react';
import './FavoriteButton.scss';

function FavoriteButton(props) {
  const {toggleText, showSearch} = props
  return (
    <div className="favorite-button" onClick={toggleText}>
        { showSearch ? "Favorites": "Search"}
    </div>
  );
}

export default FavoriteButton;
