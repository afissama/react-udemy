import logo from './logo.svg';
import AddUser from './components/Users/AddUser';

import './App.css';
import UserList from './components/Users/UserList';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user)=>{
    setUsers((prevList) => {
      return [...prevList, user];
    });
  }

  return (
    <div>
      <AddUser onNewUser={addUserHandler} />
      <UserList users = {users} />
    </div>
  );
}

export default App;
