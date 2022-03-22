import React, { useEffect, useState, useMemo } from 'react'
const usersJSON = require('./users.json');

export default function App() {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  /*const filteredUsers = useMemo(() => {
    const regexp = new RegExp(filter, 'gi');
    console.log(filter)
    return users.filter((user) => {
      const fullName = user.first_name + " " + user.last_name;
      return fullName.match(regexp);
    });
  }, [users, filter]);*/

  useEffect(() => {
    //Store timeout ID
    let timeoutID = setTimeout(() => {
      const regexp = new RegExp(filter, 'gi');
      console.log(regexp);
      setFilteredUsers(
        users.filter((user) => {
          const fullName = user.first_name + " " + user.last_name;
          return fullName.match(regexp);
        })
      );
    }, 500);
    //While [users, filter] are changing we are cleaning timeout
    return () => {
      clearTimeout(timeoutID);
    }    
  }, [users, filter]);

  useEffect(() => {
    setUsers(usersJSON);
  }, []);

  return (
    <div className='main'>
      <div className='search-box'>
        <input type={'text'} placeholder='Search...' className='filter-input' onChange={event => {
          setFilter(event.target.value);
        }} />
      </div>
      <div className='user-list'>
        {users && filteredUsers.map((user) => {
          return (
           <div className='user-div' key={user.id}>{user.first_name}{" "}{user.last_name}</div>
          );
        })}
      </div>
    </div>
  )
}
