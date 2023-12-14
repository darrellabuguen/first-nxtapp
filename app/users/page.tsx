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
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.id} >
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default UsersPage