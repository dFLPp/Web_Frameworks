import { useState, useEffect, useRef } from 'react'
import List from './components/List'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const alert = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert.current.innerHTML="Must provide text";
    } else if (text && isEditing){
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, text: text };
          }
          return item;
        })
      );
      setText('');
      setEditID(null);
      setIsEditing(false);
      alert.current.innerHTML="edit sucessful";
    } else {
      alert.current.innerHTML="item created";
      const newItem = { id: new Date().getTime().toString(), text: text };

      setList([...list, newItem]);
      setText('');
    }
    setTimeout(() => {alert.current.innerHTML=''}, 3000)
  };

  const clearList = () => {
    alert.current.innerHTML="cleaning list";
    setList([]);
    setTimeout(() => {alert.current.innerHTML=''}, 3000)
  };
  const removeItem = (id) => {
    alert.current.innerHTML="item removed";
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setText(specificItem.text);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  },[list])

  return (<>
    <main>
      <header>
        create item
      </header>
      <article>
        <form onSubmit={handleSubmit}>
          <input type="text" required value={text} onChange={(e) => setText(e.target.value)}/>
          <button type='submit'>{isEditing ? 'edit' : 'create'}</button>
        </form>
      </article>
       <div className='alert-container' ref={alert}></div>
      <article className='items-container'>
        {
          <List items={list} removeItem={removeItem} editItem={editItem} clearList={clearList}/>
        }
      </article>
    </main>
  </>)
}

export default App
