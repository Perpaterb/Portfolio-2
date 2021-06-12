import React from 'react';
import styled from 'styled-components';
import imgs from './imgs'

const Main = styled.div`
`
const page1post4 = () => {
    return (
        <Main style={{ backgroundImage: `url(${imgs[2]})` }}/>
    )
}

export default page1post4;