import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'

export const BackIcon = () => {
    return (
        <div style={{position: 'absolute', top: 10, left: 20}}>
            <Link to="/">
                <Button 
                    shape='circle'
                    icon={<ArrowLeftOutlined style={{ fontSize: '30px' }} />}
                    type='text'
                /> 
            </Link>
        </div>
    )
}