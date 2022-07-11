import React from 'react';

//returns the img from flickr
const Photo = props => {
  const url = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
return(
    <li>
      <img src={url} alt={props.title}/>
    </li>
  );
}

export default Photo;