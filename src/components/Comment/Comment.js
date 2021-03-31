import React from 'react'
import './comment.css'

export const Comment = ({ comment }) => {
    return (
        <div className='comment-container'>
            { comment?.body }
        </div>
    )
}