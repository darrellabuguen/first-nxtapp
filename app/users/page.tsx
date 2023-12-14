import React from 'react'

interface Users {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: Users[] = await res.json();
    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toTimeString()}</p>
            <ul>
                {
                    users.map(user =>
                        <li key={user.id}>{user.id + ". " + user.name}</li>
                    )
                }
            </ul>
        </>
    )
}

export default UsersPage