import React, { useRef } from 'react'
import { db } from "./firebase-config";
import { updateDoc, doc, deleteDoc } from "firebase/firestore";

export default function List({ user, updateUsersFunction }) {

  const updateUserNameRef = useRef();
  const updateUserAgeRef = useRef();

  const updateUser = async (id, name, age) => {
    if(id && name && age > 0) {
        const newFields = {name: name, age: age};
        const updateUser = doc(db, "users", id);
        updateDoc(updateUser, newFields);
        updateUsersFunction();
    }
  }

  const deleteUser = async (id) => {
    if(id) {
      const userToDelete = doc(db, "users", id);
      await deleteDoc(userToDelete);
    }
  }

  return (
    <div key={user.id} style={{textAlign: "left", marginBottom: "20px"}}>
        <p>
          {user.name}{" "}{user.age}{" "}
          <button onClick={() => { deleteUser(user.id); }}>Delete</button>
        </p>
        <div>
            <input type='text' placeholder='New name' style={{width: "80px"}} ref={updateUserNameRef} />
            <input type='number' placeholder='New age' style={{width: "80px"}} ref={updateUserAgeRef} />
            <button onClick={() => {
                updateUser(user.id, updateUserNameRef.current.value, updateUserAgeRef.current.value);
            }}>Update</button>
        </div>
        
    </div>
  )
}
