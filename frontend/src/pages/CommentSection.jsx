import React, { useEffect, useState } from 'react';
import './CommentSection.css';
const { useLocation, useParams } = require('react-router-dom');

export default function CommentSection() {
    const [name, setName] = useState();
    const [comments, setComments] = useState();
    const location = useLocation();
    const params = useParams();
    const id = params.id;
    const postComment = async (event) => {
        const key = event.key;
        const comment = event.target.value;
        const commentObj = {
            name: name,
            comment: comment,
            movie: location.state._id
        };
        if (key === "Enter") {
            await fetch('http://localhost:8080/api/comment', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(commentObj)
            });
            getComments();
        };
    };

    const submitName = (event) => {
        setName(event.target.value);
        const key = event.key;
        if (key === "Enter") {
            document.querySelector('#comment-field').focus();
        }
    };


    const getComments = async () => {
        const promise = await fetch(`http://localhost:8080/api/comment/${id}`);
        const newComments = await promise.json();
        setComments(newComments);
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div id='comment-section'>
            <h2 style={{ backdropFilter: "blur(2px)", padding: "2.5vw", backgroundColor: "rgb(255, 255, 255, 0.5)", fontSize: "1.75rem" }}>{location.state?.title}</h2>
            <div>
                <input onKeyDown={(event) => submitName(event)} placeholder='Name'></input>
                <input id='comment-field' onKeyDown={(event) => postComment(event)} placeholder='Write a comment...'></input>
            </div>
            <table className='comment-table'>
                {
                    comments?.map(comment => {
                        const fullDate = new Date(comment.createdAt);
                        const date = fullDate.toLocaleDateString();
                        const hours = fullDate.getHours();
                        const minutes = fullDate.getMinutes();
                        const seconds = fullDate.getSeconds();
                        return <tr key={comment._id}>
                            <td>{comment.name}</td>
                            <td>{comment.comment}</td>
                            <td>{date + ' ' + hours + '  ' + minutes + '  ' + seconds}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}
