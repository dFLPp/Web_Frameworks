import React, { useState } from 'react';
import './App.css';
import menu from './db/data';
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(menu.map((menuItem) => menuItem.category))];

function App() {
  const [dishes, setDishes] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  
  const filterItems = (category) => {
    if (category === 'all') {
      setDishes(menu);
      return;
    }
    const newMenu = menu.filter((menuItem) => menuItem.category === category);
    setDishes(newMenu);
  };

  return (<>
    <main>
      <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories options={categories} filterItems={filterItems}/>
        <Menu items={dishes}/>
      </section>
      </main>
    </main>
  </>)
}

export default App
