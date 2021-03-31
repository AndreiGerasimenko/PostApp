import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Typography, Button } from 'antd'
import { fetchPosts } from '../redux/actions'
import { Loader } from '../components/Loader/Loader'
import { PostsList } from '../components/PostsList/PostsList'


export const MainPage = () => {

    const { posts, loading } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])


    return (
        <div>
            <Typography.Title level={2}>
                List of Posts
            </Typography.Title>

            <Link to='/create-post'>
                <Button type='primary' size='large'>Create a POST</Button> 
            </Link>

            {
              loading ? <Loader /> : <PostsList posts={posts} />
            }

        </div>
    )
}