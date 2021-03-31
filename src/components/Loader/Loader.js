import { Spin } from 'antd'
import styled from 'styled-components'

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Loader = () => {
    return (
        <LoaderContainer>
            <Spin size='large' />
        </LoaderContainer>
    )
}