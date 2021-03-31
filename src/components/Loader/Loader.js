import { Spin } from 'antd'
import './loader.css'

export const Loader = () => {
    return (
        <div className='loader-container'>
            <Spin size='large' />
        </div>
    )
}