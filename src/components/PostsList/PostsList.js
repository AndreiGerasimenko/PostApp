import React from 'react'
import { PostListItem } from '../PostListItem/PostListItem'
import { Empty } from 'antd'
import './postsList.css'

export const PostsList = ({ posts }) => {
    return (
        <div className='list-container'>
            {
                posts?.length ? 
                    posts.map(post => {
                        return <PostListItem post={post} key={post.id} />
                    })
                :
                    <Empty /> 
            }
        </div>
    )
}