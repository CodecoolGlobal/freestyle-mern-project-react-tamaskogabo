import React from 'react';
const { useLocation, useParams } = require('react-router-dom');

export default function CommentSection() {
    const location = useLocation();
    const params = useParams();
    const id = params.id;

    return (
        <div>
            
        </div>
    )
}
