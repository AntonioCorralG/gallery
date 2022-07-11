import React from 'react';
// import { getFID } from 'web-vitals';
import NotFound from './NotFound';
import Photo from './Photo';


//creates the list of photos
const PhotoList = (props) => {
    const results = props.data;
    let photos;
    
  //uses a conditional to determine whether the photos should be rendered or the not found component
    if (results.length > 0) {
      photos = results.map((photo) => (
        <Photo id={photo.id} server={photo.server} secret={photo.secret} key={photo.id} />
      ));
    } else {
      photos = <NotFound />
    }
  
    return (
    <div className="photo-container">
        <h2>{props.query}</h2>
        <ul>{photos}</ul>
    </div>
    );
  };

export default PhotoList;