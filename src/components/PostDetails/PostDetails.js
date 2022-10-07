import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body, id, userId} = post;
    const navigate = useNavigate();
    const handlerNavigate = () => {
        navigate(`/friends/${userId}`);
    }
    // console.log(post)
    return (
        <div className='post-details'>
            <h2>Details About Post</h2>
            <h4><u>{title}</u></h4>
            <p><small><i>{body}</i></small></p>
            <button onClick={handlerNavigate}>Grt the Author</button>
        </div>
    );
};

export default PostDetails;