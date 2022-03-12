import React, { useRef, useState } from 'react'
import { addDoc, collection } from "firebase/firestore";
import { db } from './firebase-config';

export default function NewUser({getUsers}) {

  const [isError, setIsError] = useState(false);

  const newUserName = useRef();
  const newUserAge = useRef();
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    if(newUserName.current.value && parseInt(newUserAge.current.value) > 0) {
        setIsError(false);
        await addDoc(usersCollectionRef, { name: newUserName.current.value, age: parseInt(newUserAge.current.value) });
        newUserName.current.value = '';
        newUserAge.current.value = '';
        getUsers();
    } else {
      setIsError(true);
    }
  };

  return (
    <div className='add'>
      <input type='text' placeholder='Name...' style={{width: "60px"}} ref={newUserName} />
      <input type='number' placeholder='Age...' style={{width: "60px"}} ref={newUserAge} />
      <button onClick={createUser}>Create User</button>
      { isError &&
        <p style={{color: "red"}}>
          Wrong input!
        </p>
      }
    </div>
  )
}
