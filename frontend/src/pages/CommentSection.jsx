import React from 'react';
import './CommentSection.css';
const { useLocation, useParams } = require('react-router-dom');

export default function CommentSection() {
    const location = useLocation();
    const params = useParams();
    const id = params.id;

    return (
        <div id='comment-section'>
            <input style={{width: '66%'}}></input>
            <div style={{width: '66%'}}>COMMENTS</div>
        </div> 
    )
}
