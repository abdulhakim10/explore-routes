import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, email, username, id} = friend;
    return (
        <div>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
                <p><span>User Name: <Link to={`/friends/${id}`}>{username}</Link> </span></p>
        </div>
    );
};

export default Friend;