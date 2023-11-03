import React, { useState, useEffect } from 'react';
import people from '../db/data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, image, job, text} = people[index];

  const checkNumber = (num) => {
    if(num > people.length-1) return 0
    if(num < 0) return people.length-1 
    else return num
  }

  const prev = () => {
    setIndex((oldIndex) => {
      return checkNumber(oldIndex - 1);
    })
  }

  const next = () => {
    setIndex((oldIndex) => {
      return checkNumber(oldIndex + 1);
    })
  }
  const random = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) randomNum = index + 1;
    setIndex( checkNumber(randomNum));
  };

  return (<>
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => prev()}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => next()}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => random()}>
        surprise me
      </button>
    </article>
  </>);
};

export default Review;
