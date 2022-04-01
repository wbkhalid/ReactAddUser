
import { useState } from 'react';
import './App.css';
import AddUser from './Component/User/AddUser';
import UsersList from './Component/User/UsersList';


const App = () => {

  const [usersList, setUsersList] = useState([]);
  const addUsersHandler = (userName , userAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList , {name:userName ,age:userAge, id:Math.random().toString()}]

    })

    }
  

  return (
    <>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={usersList} />
    </>
  );
}


export default App;
