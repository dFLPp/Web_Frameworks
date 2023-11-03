import React, {useState} from 'react'

export default function oldForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  })
  const [users, setUsers] = useState([]);

  const changeHandler = (e) => {
    const inputField = e.target.name;
    const inputvalue = e.target.value;
    //dynamic objects
    setUser({...user, [inputField]: inputvalue})
  }

  const submitHandler =(e) => {
    e.preventDefault();
    if(user.age && user.email && user.name){
      const newUser = {...user, id: new Date().getTime().toString()}
      setUsers([newUser, ...users])
    }
    user.name = ''
    user.email = ''
    user.age = ''
  }

  return (<>
    <main>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'><p>Name: </p></label>
        <input type="text" name='name' id='name' value={user.name} required onChange={changeHandler}/>
        <label htmlFor='email'><p>Email: </p></label>
        <input type="text" name='email' id='email' value={user.email} required onChange={changeHandler}/>
        <label htmlFor='age'><p>Age: </p></label>
        <input type="text" name='age' id='age' value={user.age} required onChange={changeHandler}/> 
        <br/>
        <button type='submit'>submit</button>
      </form>
      <div>
        <ul>
        {
          users.length === 0 ? '' : 
          users.map((user) => {
            return <div key={user.id} className="user-item">
              <h2>{user.name}</h2>
              <h3>{user.email}</h3>
              <h4>{user.age}</h4>
            </div>
          })
        }
        </ul>
      </div>
    </main>
  </>)
}
