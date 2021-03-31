import React from 'react'
import { Button, Input } from 'antd'
import { Comment } from '../Comment/Comment'
import { useInput } from '../../hooks/controlledInput.hook'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../redux/actions'
import styled from 'styled-components'

const CommentWrapper = styled.div`
    max-width: 95%;
    margin: 10px auto;
    font-size: 1rem;
    padding: 10px 20px;
`;

const NoCommentsBlock = styled.div`
    font-style: italic;
    text-align: center;
`;

export const CommentsContainer = ({ comments }) => {
    const dispatch = useDispatch()
    const { id } = useSelector(state => state.chosenPost)
    const { bind, resetInput, value } = useInput()

    const onSendHandler = () => {
        dispatch(addComment(id, value))
        resetInput();
    }

    return (
        <CommentWrapper>
            
            <Input.TextArea 
                {...bind}
                autoSize={{ minRows: 6}}
                placeholder="Leave your comment"
                style={{fontSize: '1rem'}}
            />
            <Button 
                type="primary"
                disabled={!value}
                style={{ margin: "10px 0"}}
                onClick={onSendHandler}
            >
                Send
            </Button>
           
            {
                comments?.length ? 
                    comments.map(item => {
                        return (
                            <Comment comment={item} key={item.id} />
                        )
                    })
                :
                    <NoCommentsBlock>There are no comments yet.</NoCommentsBlock>    
            }
        </CommentWrapper>
    )
}