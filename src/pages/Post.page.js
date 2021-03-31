import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostById, setChosenPost } from '../redux/actions'
import { Typography, Empty } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader/Loader'
import { CommentsContainer } from '../components/CommentContainer/CommentsContainer'
import { BackIcon } from '../components/BackIcon/BackIcon'
import styled from 'styled-components'

const PostsBodyContainer = styled.div`
    border: 1px solid black;
    max-width: 95%;
    margin: 0 auto;
    min-height: 60vh;
    font-size: 1.2rem;
    padding: 10px 10px;
`

export const PostPage = () => {
    const { id } = useParams()
    const { chosenPost, loading } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPostById(id))
        return () => {
            dispatch(setChosenPost(null))
        }
    }, [dispatch, id])

    return (
        <>
            {
                loading ? 
                    <Loader /> 
                :   
                    chosenPost ? 
                        <>
                            <Typography.Title level={2}>
                                { chosenPost?.title }
                            </Typography.Title>
                            <PostsBodyContainer>
                                {
                                    chosenPost?.body
                                }
                            </PostsBodyContainer>
                            <CommentsContainer comments={chosenPost?.comments} />
                        </>
                        :
                        <Empty />
            }   
            <BackIcon />
        </>
    )
}