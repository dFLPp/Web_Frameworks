import React, { useState } from 'react';

const Tour = ({name, id, info, image, price, removeTour}) => {
  const [showText, setShowText] = useState(false);
  return <>
  <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
      <h4>{name}</h4>
      <h4 className="tour-price">${price}</h4>
      </div>
      <p>
        {
          showText ? info : `${info.substring(0, 200)}...`
        }
        <button onClick={() => setShowText(!showText)}>{showText ? 'show less' : 'show more'}</button>
      </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
    </footer>  
  </article>  
  </>
};

export default Tour;
