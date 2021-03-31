import React from 'react'
import { Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/actions'
import styled from 'styled-components'

const ListContainer = styled.div`
    border: 2px solid lightgrey;
    padding: 10px 10px;
    margin-bottom: 10px;
    transition: 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        background-color: lightblue;
        cursor: pointer;
    }
`;

const PostTitle = styled.div`
    font-size: 1.5rem;
`;

export const PostListItem = ({ post }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const handlePostClick = () => {
        history.push(`/post/${post.id}`);
    }

    const handleEditCleck = (e) => {
        e.stopPropagation();
        history.push(`/edit/${post.id}`);
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        dispatch(deletePost(post.id));
    }

    return (
        <ListContainer onClick={handlePostClick}>
            <PostTitle>
                { post.title }
            </PostTitle>
            <div className='icons-container'>
                <Space size="small">
                    <EditOutlined 
                        style={{ fontSize: '1.5rem' }} 
                        onClick={handleEditCleck} />
                    <DeleteOutlined 
                        style={{ fontSize: '1.5rem' }} 
                        onClick={handleDelete}/>
                </Space>
            </div>
        </ListContainer>
    )
}