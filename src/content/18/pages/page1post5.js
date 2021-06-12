import React from 'react';
import styled from 'styled-components';
import imgs from './imgs'

const Main = styled.div`
`
const page1post5 = () => {
    return (
        <Main style={{ backgroundImage: `url(${imgs[3]})` }}/>
    )
}

export default page1post5;