"use client";  
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Page = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/users');
                if (!response.ok) {
                    throw new Error(`htts is giving an error ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
                console.log(data);
            } catch (error) {
                console.error('Eror while ftching data from fetch:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <div>User Page</div>
        <table style={{ 
            border: "2px solid white", 
            width: "100%", 
            borderCollapse: "collapse", 
            margin: "20px 0"
        }}>
            <thead>
                <tr style={{ borderBottom: "2px solid white" }}>
                    <th style={{ padding: "6px", borderRight: "2px solid white" }}>ID</th>
                    <th style={{ padding: "6px", borderRight: "2px solid white" }}>Name</th>
                    <th style={{ padding: "6px", borderRight: "2px solid white" }}>Gender</th>
                    <th style={{ padding: "6px" }}>Number</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
                        <Link href={`/users/${user.id}`}>
                                    <div style={{ color: 'blue', textDecoration: 'underline' }}>{user.id}</div>
                                </Link>
                        <td style={{ padding: "8px", borderRight: "2px solid white" }}>{user.name}</td>
                        <td style={{ padding: "8px", borderRight: "2px solid white" }}>{user.gender}</td>
                        <td style={{ padding: "8px" }}>{user.number}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
    );
};

export default Page;