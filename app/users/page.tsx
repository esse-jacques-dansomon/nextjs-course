import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
    username: string;

}
const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: {
            revalidate: 1
        }
    });
    const users : User[] = await res.json();

    return (
       <>
        <h1>Users</h1>
        <ul>
            {users.map((user: User) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
       </>
    )
}
export default UsersPage
