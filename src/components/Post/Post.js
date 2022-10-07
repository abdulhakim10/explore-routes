import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
   const {title, body, id} = post;

   const navigate = useNavigate();
   
   const handlerNavigate = () => {
    navigate(`/posts/${id}`);
   };

    return (
        <div className='post'>
           <h4>{title}</h4> 
           <p><small>{body}</small></p>
           <Link to={`/posts/${id}`}>
            <Link to={`/posts/${id}`}>Details</Link>
           <button>Show Details</button>
           </Link>
           <button onClick={handlerNavigate}>Show Details2</button>
        </div>
    );
};

export default Post;