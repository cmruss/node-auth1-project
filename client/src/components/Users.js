import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axiosWithAuth()
            .get('/users')
            .then(response => {
                setUsers(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },[]);

    return(
        <div>
            <h4>users</h4>
            {users.map(user =>(
                <p>{user.username}</p>
            ) )}
        </div>
    );
};

export default Users;