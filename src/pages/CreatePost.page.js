import React, { useEffect } from 'react'
import { Input, Typography, Button } from 'antd'
import { useInput } from '../hooks/controlledInput.hook'
import { useHttp } from '../hooks/http.hook'
import { showNotification } from '../showNotification'
import { BackIcon } from '../components/BackIcon/BackIcon'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const CreatePostPage = () => {
    const { id } = useParams()
    const post = useSelector(state => state.posts.find(item => item.id == id))

    const { 
        bind: titleBind,
        value: titleValue, 
        setValue: setTitle
    } = useInput(post?.title || '')

    const { 
        bind: bodyBind, 
        value: bodyValue, 
        setValue: setBody 
    } = useInput(post?.body || '')

    const { loading, request, error, clearError } = useHttp()

    const createPostHandler = async () => {
        try{
            await request(
                'https://bloggy-api.herokuapp.com/posts',
                'POST',
                JSON.stringify({
                    title: titleValue,
                    body: bodyValue
                }),
                {
                    'Content-Type': 'application/json'
                }
            )

            showNotification({
                type: 'success',
                message: 'The Post has been saved'
            })

            setBody('')
            setTitle('')
        } catch(e) {
            console.log('Error', e)
        }
    }

    const editPostHandler = async () => {
        try{
            await request(
                `https://bloggy-api.herokuapp.com/posts/${id}`,
                'PUT',
                JSON.stringify({
                    title: titleValue,
                    body: bodyValue
                }),
                {
                    'Content-Type': 'application/json'
                }
            )

            showNotification({
                type: 'success',
                message: 'The Post has been saved'
            })
        } catch(e) {
            console.log('Error', e)
        }
    }

    useEffect(() => {
        if(error) {
            showNotification({
                type: 'error',
                message: 'The Post hasn`t been saved',
                description: 'Try again later'
            })
        }
    }, [error, clearError])

    const PageTitle = post ? 'Edit Post' : 'Create Post' 

    return (
        <>
            <Typography.Title level={2}>
                { PageTitle }   
            </Typography.Title>
            <Input 
                {...titleBind }
                placeholder='Post Title'
                style={{fontSize: '1.5rem'}}
            />
            <Input.TextArea 
                {...bodyBind }
                placeholder='Post content'
                style={{fontSize: '1.2rem', margin: '1rem 0'}}
                autoSize={{ minRows: 11 }}
            />

            {
                !post ? 
                    <Button 
                        type='primary'
                        size='large'
                        disabled={ !titleValue || !bodyValue }
                        onClick={createPostHandler}
                        loading={loading}
                    >
                        Create Post
                    </Button>
                :
                    <Button 
                        type='primary'
                        size='large'
                        disabled={ !titleValue || !bodyValue }
                        onClick={editPostHandler}
                        loading={loading}
                    >
                        Save changes
                    </Button>
            }
            <BackIcon />
        </> 
    )
}