import React from 'react';

 class Gif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: false
        };
      }
  
    handleClick = (event) => {
          event.preventDefault();
        !this.props.favorites.includes(this.props.image) && this.props.favorites.push(this.props.image) 
         this.setState({
          selected: !this.state.selected
      })  
    }

  render(){
    const{
      image, 
      gifs,
      alt_text,
      index
    } = this.props;

    return (
        <div tabindex={`${index}`} className="gif" onClick={this.handleClick}>
           <img alt={alt_text} src={image} className={ gifs && this.state.selected ?  "selected" : ""}  />
        </div>
      );
  }
 
}

export default Gif;