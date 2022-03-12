import React, { useEffect, useState } from 'react'
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import List from './List';
import NewUser from './NewUser';

export default function App() {

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((d) => ({ ...d.data(), id: d.id })));
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div style={{width: "500px", margin: "auto"}}>
            <NewUser getUsers={getUsers}/>
            {users.map((user) => {
                return (
                    <List user={user} updateUsersFunction={getUsers}/>
                )
            })}
        </div>
    )
}
