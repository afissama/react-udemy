import logo from './logo.svg';
import AddUser from './components/Users/AddUser';

import './App.css';
import UserList from './components/Users/UserList';

const USERS = [
  {name: "name0", age: 25}
]

function App() {
  return (
    <div>
      <AddUser />
      <UserList users = {USERS} />
    </div>
  );
}

export default App;
