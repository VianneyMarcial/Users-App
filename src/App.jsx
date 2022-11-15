import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react'
import './App.css'
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';

function App() {
  
  const [ usersList, setUsersList] = useState([]);
  const [ userSelected, setUserSelected ] = useState(null);
  
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsersList(res.data));
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then((res) => setUsersList(res.data))
      .catch(error => console.log(error))
  }

  const deleteUser = (user) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
    .then(() => {
      getUsers();
    });
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }
 
  const deselecUser = () => setUserSelected(null);

  return (
    <div>
      <UsersForm getUsers={()=>getUsers()} userSelected={userSelected} deselecUser={()=>deselecUser()}/>
      <UsersList usersList={usersList} selectUser={selectUser} deleteUser={deleteUser}/>
    </div>
  )
}

export default App