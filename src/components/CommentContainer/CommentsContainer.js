import React from 'react'
import { Button, Input } from 'antd'
import { Comment } from '../Comment/Comment'
import { useInput } from '../../hooks/controlledInput.hook'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../redux/actions'
import './commentsContainer.css'

export const CommentsContainer = ({ comments }) => {
    const dispatch = useDispatch()
    const { id } = useSelector(state => state.chosenPost)
    const { bind, resetInput, value } = useInput()

    const onSendHandler = () => {
        dispatch(addComment(id, value))
        resetInput();
    }

    return (
        <div className="comment-wrapper">
            
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
                    <div className="no-comments">There are no comments yet.</div>    
            }
        </div>
    )
}