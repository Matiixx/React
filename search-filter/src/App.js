import React, { useEffect, useState, useMemo } from 'react'
const usersJSON = require('./users.json');

export default function App() {

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [otherThing, setOtherThing] = useState("");

  const filteredUsers = useMemo(() => {
    const regexp = new RegExp(filter, 'gi');
    console.log(filter)
    return users.filter((user) => {
      const fullName = user.first_name + " " + user.last_name;
      return fullName.match(regexp);
    });
  }, [users, filter]);

  useEffect(() => {
    setUsers(usersJSON);
  }, []);

  return (
    <div className='main'>
      <div className='search-box'>
        <input type={'text'} className='filter-input' onChange={event => {
          setFilter(event.target.value);
        }} />
        <input type={'text'} onChange={event => setOtherThing(event.target.value)} />
      </div>
      <div className='user-list'>
        {users && filteredUsers.map((user) => {
          return (
           <div className='user-div' placeholder='Search...' key={user.id}>{user.first_name}{" "}{user.last_name}</div>
          );
        })}
      </div>
    </div>
  )
}
