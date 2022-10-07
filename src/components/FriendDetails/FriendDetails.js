import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css'

const FriendDetails = () => {
    const friend = useLoaderData();
    const {name, email, phone} = friend;
    return (
        <div className='details'>
            <h1><u>Friend Details</u></h1>
            <h3>Name: {name}</h3>
            <p>Phone: {phone}</p>
            <p><small>Email: {email}</small></p>
        </div>
    );
};

export default FriendDetails;