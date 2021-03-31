import React from 'react'
import { Space } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/actions'

import './postListItem.css'

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
        <div className='listItem-container' onClick={handlePostClick}>
            <div className="post-title">
                { post.title }
            </div>
            <div className='icons-container'>
                <Space size="small">
                    <EditOutlined className="icon" onClick={handleEditCleck} />
                    <DeleteOutlined className="icon" onClick={handleDelete}/>
                </Space>
            </div>
        </div>
    )
}