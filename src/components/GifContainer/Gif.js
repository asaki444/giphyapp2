import React from 'react';

function Gif (props){

        this.state = {
          selected: false
        };
      
  
    handleClick = (event) => {
          event.preventDefault();
        !this.props.favorites.includes(this.props.image) && this.props.favorites.push(this.props.image) 
         this.setState({
          selected: !this.state.selected
      })  
    }


    const{
      image, 
      gifs,
      alt_text,
      index
    } = props;

    return (
        <div tabindex={`${index}`} className="gif" onClick={this.handleClick}>
           <img alt={alt_text} src={image} className={ gifs && this.state.selected ?  "selected" : ""}  />
        </div>
      );
  
 
}

export default Gif;