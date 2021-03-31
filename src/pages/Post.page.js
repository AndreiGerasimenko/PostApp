import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostById, setChosenPost } from '../redux/actions'
import { Typography, Empty } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader/Loader';
import { CommentsContainer } from '../components/CommentContainer/CommentsContainer'
import { BackIcon } from '../components/BackIcon/BackIcon'

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
                            <div style={{ border: '1px solid black', maxWidth: '95%', margin: '0 auto', minHeight: '60vh', fontSize: '1.2rem'}}>
                                {
                                    chosenPost?.body
                                }
                            </div>
                            <CommentsContainer comments={chosenPost?.comments} />
                        </>
                        :
                        <Empty />
            }   
            <BackIcon />
        </>
    )
}