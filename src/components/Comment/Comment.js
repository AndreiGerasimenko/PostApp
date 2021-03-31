import React from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    background-color: rgb(171, 234, 248);
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 10px;
`

export const Comment = ({ comment }) => {
    return (
        <CommentContainer>
            { comment?.body }
        </CommentContainer>
    )
}