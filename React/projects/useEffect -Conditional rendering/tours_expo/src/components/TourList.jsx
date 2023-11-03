import React from 'react';
import Tour from './Tour';

const TourList = ({tours, removeTour}) => {
  return <>
    <section>
      <div className="title">
        <h2>{tours.length} Tours avaiable</h2>
        <div className="underline"></div>
      </div>
    <div>
    {
      tours.map((tour) => {
        return <Tour key = {tour.id} {...tour} removeTour={removeTour}/>
      })
    }
    </div>
  </section>
  </>
  };

export default TourList;
