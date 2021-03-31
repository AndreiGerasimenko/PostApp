import React from 'react'
import { PostListItem } from '../PostListItem/PostListItem'
import { Empty } from 'antd'
import styled from 'styled-components'

const ListContainer = styled.div`
    margin-top: 20px;
`;

export const PostsList = ({ posts }) => {
    return (
        <ListContainer>
            {
                posts?.length ? 
                    posts.map(post => {
                        return <PostListItem post={post} key={post.id} />
                    })
                :
                    <Empty /> 
            }
        </ListContainer>
    )
}