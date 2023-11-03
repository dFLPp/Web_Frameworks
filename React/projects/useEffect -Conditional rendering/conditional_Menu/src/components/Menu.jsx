import React from 'react';
import Item from './Item';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem, index) => {
        return (
            <Item {...menuItem} key={index}/>
        );
      })}
    </div>
  );
};

export default Menu;