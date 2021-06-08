import React from 'react';
import styled from 'styled-components';
import imgs from './imgs';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 50px;
text-align: center;
`

const page1post1 = () => {
    return (
        <Main>
            <br/>
            <img src={imgs[0]} alt="email" style={{width: 150}}/>
            <br/>
            <h1>Email</h1>
            <br/>
            <a href="mailto:zcarss@gmail.com" >zcarss@gmail.com</a>
        </Main>
    )
}

export default page1post1;