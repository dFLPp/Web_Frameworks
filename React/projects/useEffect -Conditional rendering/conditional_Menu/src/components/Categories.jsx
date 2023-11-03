import React from 'react';

const Categories = ({options, filterItems}) => {
  return (
    <div className="btn-container">
      {options.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index} //(1)
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

//OBS 1: Mesmo que seja um botão, estamos retornando uma lista/conjunto, então cada item deve ter um id único