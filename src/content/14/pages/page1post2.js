import React from 'react';
import styled from 'styled-components';
import imgs from './imgs';

const Main = styled.div`
user-select: none;
padding-left: 10px;
font-size: 50px;
text-align: center;
`

const page1post9 = () => {
    return (
        <Main>
            <br/>
            <img src={imgs[1]} alt="github" style={{width: 150}}/>
            <br/>
            <h1>Github</h1>
            <br/>
            <a href="https://github.com/Perpaterb" target="_blank" rel="noreferrer"> https://github.com/Perpaterb</a>
        </Main>
    )
}

export default page1post9;
